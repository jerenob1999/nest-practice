import { Column, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';
import { IForm } from 'src/interfaces/form.interface';
import { FieldEntity } from 'src/fields/entities/fields.entity';

export class FormEntity extends BaseEntity implements IForm {
  @Column()
  title: string;
  @Column()
  description: string;
  @OneToMany(() => FieldEntity, (field) => field.form)
  fields: FieldEntity[];
}
