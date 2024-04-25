import { Injectable, NotFoundException } from '@nestjs/common';
import { Nursing } from './Nursing.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateNursingDto } from '../Dto/Create-Nursing.dto';
import { UpdateNursingDto } from '../Dto/Update-nursing.dto';

@Injectable()
export class NursingService {
  constructor(
    @InjectModel(Nursing.name)
    private nursingmodel: mongoose.Model<Nursing>,
  ) {}

  async findAll(): Promise<Nursing[]> {
    const nursing: Nursing[] = await this.nursingmodel.find();
    return nursing;
  }

  async create(createnursingdto: CreateNursingDto): Promise<Nursing> {
    const Nur = await this.nursingmodel.create(createnursingdto);
    return Nur.save();
  }

  async findByID(id: string): Promise<Nursing> {
    const nursing = await this.nursingmodel.findById(id);
    if (!nursing) {
      throw new NotFoundException('Not found the student');
    }
    return nursing;
  }

  async updateById(
    id: string,
    updatenursingdto: UpdateNursingDto,
  ): Promise<Nursing> {
    return await this.nursingmodel.findByIdAndUpdate(id, updatenursingdto, {
      new: true,
      runValidators: true,
    });
  }
  async deleteById(id: string): Promise<Nursing> {
    return await this.nursingmodel.findByIdAndDelete(id);
  }
}
