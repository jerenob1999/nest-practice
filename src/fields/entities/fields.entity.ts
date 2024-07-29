import { Column, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';
import { FieldType } from 'src/constants/field.type';
import { IField } from 'src/interfaces/field.interface';
import { FormEntity } from 'src/forms/entities/forms.entity';

export class FieldEntity extends BaseEntity implements IField {
  @Column({
    type: 'enum',
    enum: FieldType,
    default: FieldType.TEXT,
  })
  type: FieldType;
  @Column()
  label: string;
  @Column()
  required: boolean;
  @Column()
  order: number;
  @ManyToOne(() => FormEntity, (form) => form.fields)
  form: FormEntity;
}
