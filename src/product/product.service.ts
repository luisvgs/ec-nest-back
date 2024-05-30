import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  check(): string {
    return 'OK';
  }
}
