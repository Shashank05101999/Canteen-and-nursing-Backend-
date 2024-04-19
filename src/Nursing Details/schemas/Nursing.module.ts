import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NursingSchema } from './Nursing.schema';
import { NursingController } from './Nursing.controller';
import { NursingService } from './Nursing.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Nursing',
        schema: NursingSchema,
      },
    ]),
  ],
  controllers: [NursingController],
  providers: [NursingService],
})
export class NursingModule {}
