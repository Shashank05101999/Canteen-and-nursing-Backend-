import { IsOptional, IsString } from 'class-validator';
import { CategoryArea } from '../Category.schema';

export class updateCategoryDto {
  @IsOptional()
  @IsString()
  readonly category: string;
}
