import { Module } from '@nestjs/common';
import { FormsModule } from './forms/forms.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { FieldsModule } from './fields/fields.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FormsModule,
    DatabaseModule,
    FieldsModule,
  ],
})
export class AppModule {}
