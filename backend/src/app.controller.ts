import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import type { SaveMenuDto } from './app.dto';

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
}
