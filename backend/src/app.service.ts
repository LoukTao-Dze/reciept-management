import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from './database/supabase/supabase.service';
import { MenuListItemDto, SaveMenuDto } from './app.dto';

interface MenuRow {
  id: string;
  name: string;
  category: string;
  price: number;
  image_url: string | null;
  menu_ingredients:
    { name: string; quantity: number | null; unit: string }[] | null;
}

@Injectable()
export class AppService {
  constructor(private readonly supabaseService: SupabaseService) {}

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

    if (menuError) {
      throw new InternalServerErrorException(menuError.message);
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

      if (ingredientsError) {
        throw new InternalServerErrorException(ingredientsError.message);
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
      throw new InternalServerErrorException(ingredientsError.message);
    }

    const { error: menuError } = await client
      .from('menus')
      .delete()
      .eq('id', id);

    if (menuError) {
      throw new InternalServerErrorException(menuError.message);
    }

    return {
      message: '[BACKEND] - MENU DELETED',
    };
  }
}
