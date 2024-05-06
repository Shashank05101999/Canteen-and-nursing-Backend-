import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MedicineAllotmentService } from './MedicineAllotment.service';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { MedicineAllotment } from './MedicineAllotment.schema';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { CreateMedicineAllotmentDto } from '../dto/CreateMedicineAllotmentDTO';
import { UpdateMedicineAllotmentDto } from '../dto/UpdateMedicineAllotmentDto';

@Controller('MedicineAllotment')
export class MedicineAllotmentController {
  constructor(private medicineallotmentservice: MedicineAllotmentService) {}

  @ApiQuery({ name: 'keyword', required: false })
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Return all Medicine Allotment data',
  })
  async GetAllMedicineAllotment(
    @Query() query: ExpressQuery,
  ): Promise<MedicineAllotment[]> {
    return this.medicineallotmentservice.FindAll(query);
  }

  @Post()
  async CreateMedicineAllotment(
    @Body() createmedicineallotmentdto: CreateMedicineAllotmentDto,
  ): Promise<CreateMedicineAllotmentDto> {
    return this.medicineallotmentservice.Create(createmedicineallotmentdto);
  }

  @Get(':id')
  async GetMedicineAlloment(
    @Param('id') id: string,
  ): Promise<MedicineAllotment> {
    return this.medicineallotmentservice.findByID(id);
  }

  @Put(':id')
  async UpdateMedicineAllotment(
    @Param('id') id: string,
    @Body() updatemedicineallotmentdto: UpdateMedicineAllotmentDto,
  ): Promise<UpdateMedicineAllotmentDto> {
    await this.medicineallotmentservice.findByID(id);
    return this.medicineallotmentservice.updateById(
      id,
      updatemedicineallotmentdto,
    );
  }

  @Delete(':id')
  async DeletePrescription(
    @Param('id') id: string,
  ): Promise<{ deleted: boolean }> {
    await this.medicineallotmentservice.findByID(id);
    const deleteprescription = await this.medicineallotmentservice.deleteById(id);
    if (deleteprescription) {
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
