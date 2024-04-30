import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { Prescription } from './prescription.schema';
import { CreatePrescriptionDto } from '../Dto/Create-prescription.dto';
import { UpdateNursingDto } from 'src/Nursing Details/Dto/Update-nursing.dto';
import { UpdatePresciptionDto } from '../Dto/Update-prescription.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
@Controller('prescription')
export class PrescriptionContoller {
  constructor(private prescriptionservices: PrescriptionService) {}


  @ApiQuery({ name: 'keyword', required: false }) // Define query parameter for Swagger documentation
  @Get()
  @ApiResponse({ status: 200, description: 'Returns all nursing data' })
  async GetAllPrescription(@Query() query: ExpressQuery): Promise<Prescription[]> {
    return this.prescriptionservices.findAll(query);
  }

  @Post()
  async CreatePresciption(
    @Body() createnursingdto: CreatePrescriptionDto,
  ): Promise<Prescription> {
    return this.prescriptionservices.create(createnursingdto);
  }

  @Get(':id')
  async GetPrescription(@Param('id') id: string): Promise<Prescription> {
    return this.prescriptionservices.findByID(id);
  }

   @Put(':id')
  async updateRestaurant(
    @Param('id') id: string,
    @Body() updateprescription: UpdatePresciptionDto,
  ): Promise<Prescription> {
    // await this.restaurantsService.findByID(id);
    return this.prescriptionservices.updateById(id, updateprescription);
  }

  @Delete(':id')
  async DeletePrescription(
    @Param('id') id: string,
  ): Promise<{ deleted: boolean }> {
    await this.prescriptionservices.findByID(id);
    const deleteprescription = await this.prescriptionservices.deleteById(id);
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
