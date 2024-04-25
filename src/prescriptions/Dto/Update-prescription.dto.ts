import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

import { medication } from "./Create-prescription.dto";


export class UpdatePresciptionDto{
    @IsString()
    @IsOptional()
    StudentName: string;
  
    @IsString()
    @IsOptional()
    Daigonsis: string;
  
    @IsString()
    @IsOptional()
    @IsEnum(medication)
    Medication: string;
  
    @IsString()
    @IsOptional()
    Remark: string;
}