import { Module } from '@nestjs/common';
import { FormsModule } from './forms/forms.module';
import { ConfigModule } from '@nestjs/config';
import { FieldsModule } from './fields/fields.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceConfig } from './database/database.providers';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceConfig),
    FormsModule,
    FieldsModule,
  ],
})
export class AppModule {}
