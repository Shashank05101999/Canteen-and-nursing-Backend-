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

  @IsNumber()
  readonly Issuetime: Number;

  @IsISO8601()
  readonly ExpireDate: Date;
}
