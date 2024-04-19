import { Category } from './Category.schema';
import { CategoryService } from './Category.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { Body } from '@nestjs/common';
import { updateCategoryDto } from './dto/update-Category.dto';
import { CreateCategoryDto } from './dto/create-Category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryservices: CategoryService) {}

  @Get()
  async getAllCAtegory(): Promise<Category[]> {
    return this.categoryservices.findAll();
  }

  @Post()
  async createCategory(
    @Body()
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryservices.create(createCategoryDto);
  }

  @Get(':id')
  async getCategory(
    @Param('id')
    id: string,
  ): Promise<Category> {
    return this.categoryservices.findByID(id);
  }

  @Put(':id')
  async updateCategory(
    @Param('id')
    id: string,
    @Body()
    category: updateCategoryDto,
  ): Promise<Category> {
    return this.categoryservices.updateById(id, category);
  }
  @Delete(':id')
  async deleteCategory(
    @Param('id')
    id: string,
  ): Promise<{ deleted: Boolean }> {
    await this.categoryservices.findByID(id);
    const restaurant = this.categoryservices.deleteById(id);
    if (restaurant) {
      return {
        deleted: true,
      };
    }
  }
}
