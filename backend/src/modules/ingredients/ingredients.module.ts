import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { SupabaseModule } from '../../database/supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [IngredientsController],
  providers: [IngredientsService],
})
export class IngredientsModule {}
