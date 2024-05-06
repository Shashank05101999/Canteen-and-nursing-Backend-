import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicineAllotmentSchema } from './MedicineAllotment.schema';
import { MedicineAllotmentController } from './MedicineAllotment.controller';
import { MedicineAllotmentService } from './MedicineAllotment.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'MedicineAllotment',
        schema: MedicineAllotmentSchema,
      },
    ]),
  ],
  controllers: [MedicineAllotmentController],
  providers: [MedicineAllotmentService],
})
export class MedicineAllotmentModule {}
