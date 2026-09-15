import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { SupabaseModule } from '../../database/supabase/supabase.module';

@Module({
  imports: [SupabaseModule, HttpModule],
  controllers: [MenusController],
  providers: [MenusService],
})
export class MenusModule {}
