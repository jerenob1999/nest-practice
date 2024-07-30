import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();
const configService = new ConfigService();

export const dataSourceConfig: DataSourceOptions = {
  type: 'mysql',
  host: configService.getOrThrow('MYSQL_HOST'),
  port: configService.getOrThrow('MYSQL_PORT'),
  username: configService.getOrThrow('MYSQL_USER'),
  password: configService.getOrThrow('MYSQL_PASSWORD'),
  database: configService.getOrThrow('MYSQL_DATABASE'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/database/migrations/*.js'],
  synchronize: true,
};

export const dataSource = new DataSource(dataSourceConfig);
