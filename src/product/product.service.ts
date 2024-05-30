import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { SupabaseService } from 'src/supabase.service';

@Injectable()
export class ProductService {
  constructor(private readonly supaClient: SupabaseService) {}
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(): Promise<Array<Product>> {
    const supaClient = this.supaClient.getSupabaseClient();
    const { data, error } = await supaClient.from('products').select('*');
    if (error) {
      throw error;
    }
    return data;
  }

  async findOne(id: number): Promise<Product> {
    const supaClient = this.supaClient.getSupabaseClient();
    const { data, error } = await supaClient
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    console.log('aaa ', error.code);
    if (error) {
      throw error;
    }
    return data;
  }

  check(): string {
    return 'OK';
  }
}
