import { IsISO8601, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMedicineAllotmentDto {
  @IsString()
  @IsOptional()
  Usertype: string;

  @IsString()
  @IsOptional()
  User: string;

  @IsString()
  @IsOptional()
  Medicines: string;

  @IsString()
  @IsOptional()
  Injuryreason: string;

  @IsString()
  @IsOptional()
  Initial: string;

  @IsString()
  @IsOptional()
  Issuetime: string;

  @IsISO8601()
  @IsOptional()
  ExpireDate: Date;
}
