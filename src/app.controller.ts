import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SupabaseService } from './supabase.service';

@Controller('health')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly supaClient: SupabaseService,
  ) {}

  @Get('check')
  async getHello(): Promise<any> {
    const supaClient = this.supaClient.getSupabaseClient();
    const { data, error } = await supaClient.from('products').select('*');
    if (error) {
      throw error;
    }
    return data;
  }
}
