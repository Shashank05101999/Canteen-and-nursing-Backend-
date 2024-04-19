import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NursingService } from './Nursing.service';
import { Nursing } from './Nursing.schema';
import { CreateNursingDto } from '../Dto/Create-Nursing.dto';
import { UpdateNursingDto } from '../Dto/Update-nursing.dto';

@Controller('nursing')
export class NursingController {
  constructor(private nursingservices: NursingService) {}

  @Get()
  async getAllNursing(): Promise<Nursing[]> {
    return this.nursingservices.findAll();
  }

  @Post()
  async createRestaurant(
    @Body() createnursingdto: CreateNursingDto,
  ): Promise<Nursing> {
    return this.nursingservices.create(createnursingdto);
  }

  @Get(':id')
  async getRestaurant(@Param('id') id: string): Promise<Nursing> {
    return this.nursingservices.findByID(id);
  }

  @Put(':id')
  async updateRestaurant(
    @Param('id') id: string,
    @Body() updatenursingdto: UpdateNursingDto,
  ): Promise<Nursing> {
    await this.nursingservices.findByID(id);
    return this.nursingservices.updateById(id, updatenursingdto);
  }

  @Delete(':id')
  async deleteRestaurant(
    @Param('id') id: string,
  ): Promise<{ deleted: boolean }> {
    await this.nursingservices.findByID(id);
    const deletedNursing = await this.nursingservices.deleteById(id);
    if (deletedNursing) {
      return {
        deleted: true,
      };
    } else {
      return {
        deleted: false,
      };
    }
  }
}
