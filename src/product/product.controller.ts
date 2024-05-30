import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Query,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './dto/product.dto';
import { SupabaseService } from 'src/supabase.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get('/all')
  async findAll(): Promise<Array<Product>> {
    return this.productService.findAll();
  }

  @Get('id')
  findOne(@Query('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.findOne(id);
  }
}
