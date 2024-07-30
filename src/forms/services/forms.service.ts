import { Repository } from 'typeorm';
import { FormDTO } from '../dtos/form.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormEntity } from '../entities/forms.entity';

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(FormEntity)
    private readonly formRepository: Repository<FormEntity>,
  ) {}

  public async createForm(body: FormDTO): Promise<FormEntity> {
    try {
      return await this.formRepository.save(body);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getAllForms(): Promise<FormEntity[]> {
    try {
      return await this.formRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  }
}
