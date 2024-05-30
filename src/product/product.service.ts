import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { SupabaseService } from 'src/supabase.service';

@Injectable()
export class ProductService {
  private readonly supaClient: any;
  constructor(private readonly supabaseService: SupabaseService) {
    this.supaClient = this.supabaseService.getSupabaseClient();
  }
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(): Promise<Array<Product>> {
    const { data, error } = await this.supaClient.from('products').select('*');
    if (error) {
      throw error;
    }
    return data;
  }

  async findOne(id: number): Promise<Product> {
    const { data, error } = await this.supaClient
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  async findByCategory(category: string): Promise<Product[]> {
    console.log('aloooo ', category);
    const { data, error } = await this.supaClient
      .from('products')
      .select('*')
      .eq('category', category);

    if (error) {
      throw error;
    }

    return data;
  }

  check(): string {
    return 'OK';
  }
}
