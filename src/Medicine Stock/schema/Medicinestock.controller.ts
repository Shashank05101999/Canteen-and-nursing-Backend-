import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MedicineStockService } from './Medicinestock.service';
import { promises } from 'fs';
import { MedicineStock } from './Medicinestock.schema';
import { CreateMedicineStockDto } from '../Dto/CreateMedicineStock';
import { UpdateMedicineStockDto } from '../Dto/UpdateMedicineStock';

@Controller('medicinestock')
export class MedicineStockController {
  constructor(private medicinesstockservice: MedicineStockService) {}

  @Get()
  async GetAllMedicineStock(): Promise<MedicineStock[]> {
    return this.medicinesstockservice.FindAll();
  }

  @Post()
  async CreateMedicineStock(
    @Body() createMedicineStockDto: CreateMedicineStockDto,
  ): Promise<MedicineStock> {
    return this.medicinesstockservice.Create(createMedicineStockDto);
  }

  @Get(':id')
  async getmedicnestock(@Param('id') id: string): Promise<MedicineStock> {
    return this.medicinesstockservice.findByID(id);
  }

  @Put(':id')
  async updateMedicineStock(
    @Param('id') id: string,
    @Body() updateMedicineStockDto: UpdateMedicineStockDto,
  ): Promise<MedicineStock> {
    await this.medicinesstockservice.findByID(id);
    return this.medicinesstockservice.updateById(id, updateMedicineStockDto);
  }

  @Delete(':id')
  async deleteRestaurant(
    @Param('id') id: string,
  ): Promise<{ deleted: boolean }> {
    await this.medicinesstockservice.findByID(id);
    const deletedmedicine = await this.medicinesstockservice.DeleteById(id);
    if (deletedmedicine) {
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