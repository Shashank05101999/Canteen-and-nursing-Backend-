import { Injectable, NotFoundException } from '@nestjs/common';
import mongoose from 'mongoose';
import { Prescription } from './prescription.schema';
import { CreatePrescriptionDto } from '../Dto/Create-prescription.dto';
import { UpdatePresciptionDto } from '../Dto/Update-prescription.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PrescriptionService {
  constructor(
    @InjectModel(Prescription.name)
    private presciptionmodel: mongoose.Model<Prescription>,
  ) {}

  async findAll(): Promise<Prescription[]> {
    const prep: Prescription[] = await this.presciptionmodel.find();
    return prep;
  }

  async create(
    createprescriptiondto: CreatePrescriptionDto,
  ): Promise<Prescription> {
    const prep = await this.presciptionmodel.create(createprescriptiondto);
    return prep.save();
  }

  async findByID(id: string): Promise<Prescription> {
    const prescription = await this.presciptionmodel.findById(id);
    if (!prescription) {
      throw new NotFoundException('Not found the student');
    }
    return prescription;
  }

  async updateById(
    id: string,
    updatepresciption: UpdatePresciptionDto,
  ): Promise<Prescription> {
    return await this.presciptionmodel.findByIdAndUpdate(
      id,
      updatepresciption,
    );
  }

  async deleteById(id: string): Promise<Prescription> {
    return await this.presciptionmodel.findByIdAndDelete(id);
  }
}
