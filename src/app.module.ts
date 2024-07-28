import { Module } from '@nestjs/common';
import { FormsModule } from './forms/forms.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FormsModule,
    DatabaseModule,
  ],
})
export class AppModule {}
