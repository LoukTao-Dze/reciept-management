import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MenusService } from './menus.service';
import type { SaveMenuDto } from './dto/save-menu.dto';

interface UploadedImage {
  buffer: Buffer;
  originalname: string;
}

@Controller()
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Get('menu-list')
  getMenuList() {
    return this.menusService.getMenuList();
  }

  @Post('save-menu')
  saveMenu(@Body() menu: SaveMenuDto) {
    return this.menusService.saveMenu(menu);
  }

  @Put('update-menu/:id')
  updateMenu(@Param('id') id: string, @Body() menu: SaveMenuDto) {
    return this.menusService.updateMenu(id, menu);
  }

  @Delete('delete-menu/:id')
  deleteMenu(@Param('id') id: string) {
    return this.menusService.deleteMenu(id);
  }

  @Post('upload-image')
  @UseInterceptors(FileInterceptor('imageBuffer'))
  uploadImageToDiscord(@UploadedFile() image: UploadedImage | undefined) {
    if (!image) {
      throw new BadRequestException('An image file is required.');
    }

    return this.menusService.uploadImageToDiscord(
      image.buffer,
      image.originalname,
    );
  }
}
