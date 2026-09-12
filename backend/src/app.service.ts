import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { SupabaseService } from './database/supabase/supabase.service';
import { MenuListItemDto, SaveMenuDto } from './app.dto';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import FormData from 'form-data';

interface MenuRow {
  id: string;
  name: string;
  category: string;
  price: number;
  image_url: string | null;
  menu_ingredients:
    { name: string; quantity: number | null; unit: string }[] | null;
}

export interface UploadedImage {
  buffer: Buffer;
  originalname: string;
}

export interface DiscordMessageResponse {
  type: number;
  content: string;
  mentions: any[];
  mention_roles: any[];
  attachments: Attachment[];
  embeds: any[];
  timestamp: string;
  edited_timestamp: any;
  flags: number;
  components: any[];
  id: string;
  channel_id: string;
  author: Author;
  pinned: boolean;
  mention_everyone: boolean;
  tts: boolean;
  webhook_id: string;
}

export interface UploadImageResponse {
  status: number;
  data: DiscordMessageResponse;
}

export interface Attachment {
  id: string;
  filename: string;
  size: number;
  url: string;
  proxy_url: string;
  width: number;
  height: number;
  content_type: string;
  content_scan_version: number;
  placeholder: string;
  placeholder_version: number;
}

export interface Author {
  id: string;
  username: string;
  avatar: any;
  discriminator: string;
  public_flags: number;
  flags: number;
  bot: boolean;
  global_name: any;
  clan: any;
  primary_guild: any;
}

@Injectable()
export class AppService {
  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly httpService: HttpService,
  ) {}

  getHealthStatus(): string {
    return '[BACKEND] - IS HEALTHY 🟢';
  }

  async getMenuList(): Promise<MenuListItemDto[]> {
    const client = this.supabaseService.getClient();

    const { data, error } = await client
      .from('menus')
      .select(
        'id, name, category, price, image_url, menu_ingredients(name, quantity, unit)',
      )
      .order('created_at', { ascending: false });

    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    return ((data ?? []) as MenuRow[]).map((menu) => ({
      id: menu.id,
      name: menu.name,
      category: menu.category,
      price: menu.price,
      imageUrl: menu.image_url ?? '',
      recipeIngredients: menu.menu_ingredients ?? [],
    }));
  }

  async saveMenu(menu: SaveMenuDto) {
    const client = this.supabaseService.getClient();

    const { data: savedMenu, error: menuError } = await client
      .from('menus')
      .insert({
        name: menu.name,
        category: menu.category,
        price: menu.price,
        image_url: menu.imageUrl,
      })
      .select()
      .single();

    if (menuError !== null && menuError !== undefined) {
      throw new InternalServerErrorException(menuError?.message);
    }

    const ingredients = menu.recipeIngredients ?? [];

    if (ingredients.length > 0) {
      const { error: ingredientsError } = await client
        .from('menu_ingredients')
        .insert(
          ingredients.map((ingredient) => ({
            menu_id: savedMenu.id as string,
            name: ingredient.name,
            quantity: ingredient.quantity,
            unit: ingredient.unit,
          })),
        );

      if (ingredientsError !== null && ingredientsError !== undefined) {
        throw new InternalServerErrorException(ingredientsError?.message);
      }
    }

    return {
      message: '[BACKEND] - MENU SAVED',
      menu: savedMenu,
    };
  }

  async deleteMenu(id: string) {
    const client = this.supabaseService.getClient();

    const { error: ingredientsError } = await client
      .from('menu_ingredients')
      .delete()
      .eq('menu_id', id);

    if (ingredientsError) {
      throw new InternalServerErrorException(ingredientsError?.message);
    }

    const { error: menuError } = await client
      .from('menus')
      .delete()
      .eq('id', id);

    if (menuError) {
      throw new InternalServerErrorException(menuError?.message);
    }

    return {
      message: '[BACKEND] - MENU DELETED',
    };
  }

  async uploadImageToDiscord(
    imageBuffer: Buffer,
    filename: string,
  ): Promise<UploadImageResponse> {
    const discordWebhookUrlNew = process.env.DISCORD_WEBHOOK_URL;
    // this.configService.get<string>('DISCORD_WEBHOOK_URL');
    if (!discordWebhookUrlNew) {
      throw new InternalServerErrorException(
        'Discord webhook URL is not configured.',
      );
    }

    const formData = new FormData();

    formData.append(
      'payload_json',
      JSON.stringify({
        content:
          `======================================\n📷 New Image Upload:\nDate: ${new Date().toISOString()}\nFile Name: ${filename}\n======================================`.trim(),
      }),
    );

    formData.append('file', imageBuffer, {
      filename,
      contentType: 'application/octet-stream',
    });

    try {
      const response: AxiosResponse<DiscordMessageResponse> =
        await firstValueFrom(
          this.httpService.post<DiscordMessageResponse>(
            discordWebhookUrlNew,
            formData,
            {
              headers: formData.getHeaders(),
            },
          ),
        );

      if (response.status < 200 || response.status >= 300) {
        throw new BadRequestException(
          `Failed to upload image to Discord. Status code: ${response.status}`,
        );
      }

      const attachment = response.data?.attachments?.[0];
      if (!attachment) {
        throw new BadRequestException(
          'Discord webhook did not return an attachment URL.',
        );
      }

      return {
        status: response.status,
        data: response.data,
      };
    } catch (error: any) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException({
        message: 'Failed to upload image to Discord',
        detail: error?.message || 'Unknown error',
        timestamp: new Date().toISOString(),
      });
    }
  }
}
