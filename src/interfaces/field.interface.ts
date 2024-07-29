import { FieldType } from 'src/constants/field.type';

export interface IField {
  label: string;
  type: FieldType;
  required: boolean;
  order: number;
}
