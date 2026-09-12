import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  BadRequestException,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import type { SaveMenuDto } from './app.dto';

interface UploadedImage {
  buffer: Buffer;
  originalname: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHealthStatus(): string {
    return this.appService.getHealthStatus();
  }

  @Get('menu-list')
  getMenuList() {
    return this.appService.getMenuList();
  }

  @Post('save-menu')
  saveMenu(@Body() menu: SaveMenuDto) {
    return this.appService.saveMenu(menu);
  }

  @Delete('delete-menu/:id')
  deleteMenu(@Param('id') id: string) {
    return this.appService.deleteMenu(id);
  }

  @Post('upload-image')
  @UseInterceptors(FileInterceptor('imageBuffer'))
  uploadImageToDiscord(@UploadedFile() image: UploadedImage | undefined) {
    if (!image) {
      throw new BadRequestException('An image file is required.');
    }
    return this.appService.uploadImageToDiscord(
      image.buffer,
      image.originalname,
    );
  }
}
