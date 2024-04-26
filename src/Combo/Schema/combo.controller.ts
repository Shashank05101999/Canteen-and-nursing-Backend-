import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Combo } from './combo.schema';
import { ComboService } from './combo.service';
import { FilterComboDto } from '../dto/filter-combo.dto';
import UpdateComboDto from '../dto/update-combo.dto';
import { CreateComboDto } from '../dto/Create-combo.dto';

@Controller('combo')
export class ComboController {
  constructor(private comboService: ComboService) {}

  @Get()
  async getAllCombo(@Query() query: FilterComboDto): Promise<Combo[]> {
    return this.comboService.findAll(query);
  }

  @Post()
  async createCombo(@Body() createComboDto: CreateComboDto): Promise<Combo> {
    return this.comboService.create(createComboDto);
  }

  @Get(':id')
  async getCombo(@Param('id') id: string): Promise<Combo> {
    return this.comboService.FindByID(id);
  }

  @Put(':id')
  async updateCombo(@Param('id') id: string, @Body() updateComboDto: UpdateComboDto): Promise<Combo> {
    await this.comboService.FindByID(id);
    return this.comboService.UpdateByID(id, updateComboDto);
  }

  @Delete(':id')
  async deleteCombo(@Param('id') id: string): Promise<{ deleted: boolean }> {
    await this.comboService.FindByID(id);
    const deletedCombo = await this.comboService.deleteById(id);
    if (deletedCombo) {
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
