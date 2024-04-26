import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Combo } from './combo.schema';
import * as mongoose from 'mongoose';
import { promises } from 'fs';
import { FilterComboDto } from '../dto/filter-combo.dto';
import { CreateComboDto } from '../dto/Create-combo.dto';
@Injectable()
export class ComboService {
  constructor(
    @InjectModel(Combo.name)
    private comboModel: mongoose.Model<Combo>,
  ) {}

  // GET all Combo =>GET/combo
  async findAll(query?: FilterComboDto): Promise<Combo[]> {
    const comPerpage = 2;
    console.log('query', query);

    let filter = {};

    console.log('filter', filter);

    if (query && query.name) {
      filter = { name: { $regex: query.name, $options: 'i' } };
    }

    if (query && query.category) {
      filter = { category: query.category };
      console.log('filter234567', filter);
    }
    const combo: Combo[] = await this.comboModel
      .find(filter)
      // .limit(comPerpage)
      .exec();
    return combo;
  }

  async create(combo: CreateComboDto): Promise<Combo> {
    console.log('combo', combo);

    const com = new this.comboModel(combo);

    console.log('com', com);

    return com.save();
  }

  async FindByID(id: string): Promise<Combo> {
    const combo = await this.comboModel.findById(id);
    if (!combo) {
      throw new NotFoundException('Combo item not found');
    }
    return combo;
  }

  async UpdateByID(id: String, combo: Combo): Promise<Combo> {
    return await this.comboModel.findByIdAndUpdate(id, combo, {
      new: true,
      runValidators: true,
    });
  }

  // async DeleteById(id: string): Promise<Combo> {
  //   return await this.comboModel.findByIdAndUpdate(id);

  async deleteById(id: string): Promise<Combo> {
    return await this.comboModel.findByIdAndDelete(id);
  }
}
