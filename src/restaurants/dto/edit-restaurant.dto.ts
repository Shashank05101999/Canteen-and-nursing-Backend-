import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class EditImageDto {
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  // fileurl: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  @IsNotEmpty()
  image: Express.Multer.File;
}
