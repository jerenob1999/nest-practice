import { Module } from '@nestjs/common';
import { FormsController } from './controllers/forms.controller';
import { FormsService } from './services/forms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormEntity } from './entities/forms.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FormEntity])],
  controllers: [FormsController],
  providers: [FormsService],
})
export class FormsModule {}
