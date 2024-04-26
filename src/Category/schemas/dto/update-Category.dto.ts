import { IsOptional, IsString } from 'class-validator';
import { CategoryArea } from '../Category.schema';

export class updateCategoryDto {
  @IsOptional()
  readonly category: string;
}
