import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { SupabaseService } from './supabase.service';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [AppService, SupabaseService],
})
export class AppModule {}
