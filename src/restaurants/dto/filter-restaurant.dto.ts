import { IsOptional } from 'class-validator';

export class filterRestauranDto {
  @IsOptional()
  name: string;
}
