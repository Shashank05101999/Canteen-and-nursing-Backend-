import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MedicineStock } from './Medicinestock.schema';
import * as mongoose from 'mongoose';
import { promises } from 'fs';
import { Query } from 'express-serve-static-core';

@Injectable()
export class MedicineStockService {
  constructor(
    @InjectModel(MedicineStock.name)
    private MedicineStockModel: mongoose.Model<MedicineStock>,
  ) {}

  async FindAll(query: Query): Promise<MedicineStock[]> {
    const keyword = query.keyword
      ? {
        MedicineName: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    const medicinestock = await this.MedicineStockModel.find({ ...keyword });
    return medicinestock;
  }

  async Create(medicinestock: MedicineStock): Promise<MedicineStock> {
    const med = await this.MedicineStockModel.create(medicinestock);
    return med.save();
  }

  async findByID(id: string): Promise<MedicineStock> {
    const medicinestock = await this.MedicineStockModel.findById(id);

    if (!medicinestock) {
      throw new NotFoundException('medicine item not found');
    }
    return medicinestock;
  }

  async updateById(
    id: string,
    medicinestock: MedicineStock,
  ): Promise<MedicineStock> {
    return await this.MedicineStockModel.findByIdAndUpdate(id, medicinestock, {
      new: true,
      runValidators: true,
    });
  }

  async DeleteById(id: string): Promise<MedicineStock> {
    return await this.MedicineStockModel.findByIdAndDelete(id);
  }
}
