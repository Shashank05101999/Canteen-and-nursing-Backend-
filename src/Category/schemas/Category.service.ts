import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './Category.schema';
import * as mongoose from 'mongoose';
import { promises } from 'fs';
import { Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: mongoose.Model<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    const category = await this.categoryModel.find();
    return category;
  }

  async create(category: Category): Promise<Category> {
    const cat = await this.categoryModel.create(category);
    return cat;
  }


  async findByID(id: string): Promise<Category> {
    const restaurant = await this.categoryModel.findById(id);

    if (!restaurant) {
      throw new NotFoundException('Category not found');
    }
    return restaurant;
  }
  async updateById(id: string, restaurant: Category): Promise<Category> {
    return await this.categoryModel.findByIdAndUpdate(id, restaurant, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Category> {
    return await this.categoryModel.findByIdAndDelete(id);
  }
}
