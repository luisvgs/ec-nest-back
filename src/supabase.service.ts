import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://cakevkbiyvpubucopwum.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNha2V2a2JpeXZwdWJ1Y29wd3VtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNzA4MTMxMSwiZXhwIjoyMDMyNjU3MzExfQ.huqVAOOLNTFf0z0piz1WPuQ6NoJn9yurGZXuZs35PDw',
    );
  }

  getSupabaseClient(): SupabaseClient {
    return this.supabase;
  }
}
