import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from '../../database/supabase/supabase.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import type { Ingredient } from './entities/ingredient.entity';

@Injectable()
export class IngredientsService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('ingredients')
      .insert(this.toDatabaseRecord(createIngredientDto))
      .select()
      .single();

    if (error) {
      throw error;
    }

    return this.toIngredient(data);
  }

  async findAll(): Promise<Ingredient[]> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('ingredients')
      .select()
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return (data ?? []).map((ingredient) => this.toIngredient(ingredient));
  }

  async findOne(id: string): Promise<Ingredient> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('ingredients')
      .select()
      .eq('id', id)
      .maybeSingle();

    if (error) {
      throw error;
    }
    if (!data) {
      throw new NotFoundException(`Ingredient ${id} was not found`);
    }

    return this.toIngredient(data);
  }

  async update(
    id: string,
    updateIngredientDto: UpdateIngredientDto,
  ): Promise<Ingredient> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('ingredients')
      .update({
        ...this.toDatabaseRecord(updateIngredientDto),
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .maybeSingle();

    if (error) {
      throw error;
    }
    if (!data) {
      throw new NotFoundException(`Ingredient ${id} was not found`);
    }

    return this.toIngredient(data);
  }

  async remove(id: string): Promise<void> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('ingredients')
      .delete()
      .eq('id', id)
      .select('id')
      .maybeSingle();

    if (error) {
      throw error;
    }
    if (!data) {
      throw new NotFoundException(`Ingredient ${id} was not found`);
    }
  }

  private toDatabaseRecord(ingredient: Partial<CreateIngredientDto>) {
    return {
      ...(ingredient.name !== undefined && { name: ingredient.name }),
      ...(ingredient.amount !== undefined && { amount: ingredient.amount }),
      ...(ingredient.unit !== undefined && { unit: ingredient.unit }),
      ...(ingredient.totalPrice !== undefined && {
        total_price: ingredient.totalPrice,
      }),
      ...(ingredient.alertThreshold !== undefined && {
        alert_threshold: ingredient.alertThreshold,
      }),
      ...(ingredient.expiryDate !== undefined && {
        expiry_date: ingredient.expiryDate,
      }),
    };
  }

  private toIngredient(ingredient: Record<string, unknown>): Ingredient {
    return {
      id: String(ingredient['id']),
      name: String(ingredient['name']),
      amount: Number(ingredient['amount']),
      unit: String(ingredient['unit']),
      totalPrice: Number(ingredient['total_price']),
      alertThreshold: Number(ingredient['alert_threshold']),
      expiryDate: String(ingredient['expiry_date']),
      createdAt: String(ingredient['created_at']),
      updatedAt: String(ingredient['updated_at']),
    };
  }
}
