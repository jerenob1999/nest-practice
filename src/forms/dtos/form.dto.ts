import { IsNotEmpty, IsString } from 'class-validator';

export class FormDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
