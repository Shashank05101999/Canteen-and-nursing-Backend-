import { IsISO8601, IsNumber, IsString } from 'class-validator';

export class CreateMedicineAllotmentDto {
  @IsString()
  readonly Usertype: string;

  @IsString()
  readonly User: string;

  @IsString()
  readonly Medicines: string;

  @IsString()
  readonly Injuryreason: string;

  @IsString()
  readonly Initial: string;
  @IsString()
  readonly Issuetime: string;

  @IsISO8601()
  readonly ExpireDate: Date;
}
