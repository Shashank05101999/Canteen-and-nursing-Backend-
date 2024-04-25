import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrescriptionSchema } from './prescription.schema';
import { PrescriptionContoller } from './prescription.controller';
import { PrescriptionService } from './prescription.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Prescription',
        schema: PrescriptionSchema,
      },
    ]),
  ],
  controllers: [PrescriptionContoller],
  providers: [PrescriptionService],
})
export class PrescriptionModule {}
