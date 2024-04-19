import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicineSchema, MedicineStock } from './Medicinestock.schema';
import { MedicineStockController } from './Medicinestock.controller';
import { MedicineStockService } from './Medicinestock.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'MedicineStock',
        schema: MedicineSchema,
      },
    ]),
  ],
  controllers: [MedicineStockController],
  providers: [MedicineStockService],
})
export class MedicineStockModule {}
