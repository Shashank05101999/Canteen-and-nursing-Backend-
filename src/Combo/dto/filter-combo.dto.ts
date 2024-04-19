import { IsOptional } from 'class-validator';

export class FilterComboDto {
  @IsOptional()
  name: string;

  @IsOptional()
  category: string;
}
