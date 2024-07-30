import { FieldType } from 'src/constants/field.type';

export class FieldDTO {
  label: string;
  type: FieldType;
  required: boolean;
  order: number;
}
