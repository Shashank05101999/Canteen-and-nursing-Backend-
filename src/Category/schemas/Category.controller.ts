import { Category } from './Category.schema';
import { CategoryService } from './Category.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { Body } from '@nestjs/common';
import { updateCategoryDto } from './dto/update-Category.dto';
import { CreateCategoryDto } from './dto/create-Category.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('category')
export class CategoryController {
  constructor(private categoryservices: CategoryService) {}
  @ApiQuery({ name: 'keyword', required: false }) // Define query parameter for Swagger documentation
  @Get()
  @ApiResponse({ status: 200, description: 'Returns all nursing data' })
  async getAllCAtegory(@Query() query: ExpressQuery): Promise<Category[]> {
    return this.categoryservices.findAll(query);
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
