import { IsOptional, IsString, IsNumber } from 'class-validator';

export class Product {
  @IsOptional()
  id: number;
  @IsString()
  name: string;
  @IsNumber()
  price: number;
  @IsString()
  category: string;
}
