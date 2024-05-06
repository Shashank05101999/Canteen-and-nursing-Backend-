import { Injectable, NotFoundException } from '@nestjs/common';
import { MedicineAllotment } from './MedicineAllotment.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { promises } from 'fs';
import { Query } from 'express-serve-static-core';
import { CreateMedicineAllotmentDto } from '../dto/CreateMedicineAllotmentDTO';
import { UpdateMedicineAllotmentDto } from '../dto/UpdateMedicineAllotmentDto';

@Injectable()
export class MedicineAllotmentService {
  constructor(
    @InjectModel(MedicineAllotment.name)
    private medicineallotmentmodel: mongoose.Model<MedicineAllotment>,
  ) {}

  async FindAll(query: Query): Promise<MedicineAllotment[]> {
    const keyword = query.keyword
      ? {
          User: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    const medicineallotment = await this.medicineallotmentmodel.find({
      ...keyword,
    });

    return medicineallotment;
  }

  async Create(
    createmedicineallomentdto: CreateMedicineAllotmentDto,
  ): Promise<MedicineAllotment> {
    const medicine = await this.medicineallotmentmodel.create(
      createmedicineallomentdto,
    );
    return medicine.save();
  }

  async findByID(id: string): Promise<MedicineAllotment> {
    const medicineallotment = await this.medicineallotmentmodel.findById(id);
    if (!medicineallotment) {
      throw new NotFoundException('medicine allotment  item not found');
    }
    return medicineallotment;
  }

  async updateById(
    id: string,
    updatemedicineallotmentdto: UpdateMedicineAllotmentDto,
  ): Promise<MedicineAllotment> {
    return await this.medicineallotmentmodel.findByIdAndUpdate(
      id,
      updatemedicineallotmentdto,
      {
        new: true,
        runValidators: true,
      },
    );
  }
  async deleteById(id: string): Promise<MedicineAllotment> {
    return await this.medicineallotmentmodel.findByIdAndDelete(id);
  }
}
