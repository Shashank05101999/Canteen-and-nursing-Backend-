import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Restaurant } from './restaurant.schema';
import { RestaurantsService } from './restaurants.service';
import { updateRestaurantDto } from '../dto/update-restaurant.dto';
import { filterRestauranDto } from '../dto/filter-restaurant.dto';
import { CreateRestaurantDto } from '../dto/create-restaurant.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBody, ApiConsumes, ApiOperation } from '@nestjs/swagger';
import { FileUploadDto } from '../dto/upload-file.dto';

@Controller('restaurants')
export class RestaurantsController {
  fileUploadService: any;
  constructor(private restaurantsService: RestaurantsService) {}

  @Get()
  async getAllRestaurants(
    @Query() query: filterRestauranDto,
  ): Promise<Restaurant[]> {
    return this.restaurantsService.findAll(query);
  }

  @Post()
  async createRestaurant(
    @Body() createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantsService.create(createRestaurantDto);
  }

  @Get(':id')
  async getRestaurant(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantsService.findByID(id);
  }

  @Put(':id')
  async updateRestaurant(
    @Param('id') id: string,
    @Body() updateRestaurantDto: updateRestaurantDto,
  ): Promise<any> {
    // await this.restaurantsService.findByID(id);
    return this.restaurantsService.updateById(id, updateRestaurantDto);
  }

  @Delete(':id')
  async deleteRestaurant(
    @Param('id') id: string,
  ): Promise<{ deleted: boolean }> {
    await this.restaurantsService.findByID(id);
    const deletedRestaurant = await this.restaurantsService.deleteById(id);
    if (deletedRestaurant) {
      return {
        deleted: true,
      };
    } else {
      return {
        deleted: false,
      };
    }
  }

  //------------
  // @ApiOperation({ summary: 'Upload file with image' })
  // @ApiConsumes('multipart/form-data')
  // @Post('upload-file')
  // @UseInterceptors(
  //   FileInterceptor('image', {
  //     storage: diskStorage({
  //       destination: './uploads',
  //     }),
  //   }),
  // )
  // async uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req: any) {
  //   const fileUrl = await this.fileUploadService.uploadFile(file, req);
  //   if (fileUrl) {
  //     return {
  //       status: true,
  //       statusText: 'file uploaded',
  //       message: 'file uploaded',
  //       fileUrl,
  //     };
  //   } else {
  //     return {
  //       status: false,
  //       statusText: 'failed to upload file',
  //       message: 'failed to upload file',
  //     };
  //   }
  // }

  @ApiOperation({ summary: 'Upload file with image' })
  @ApiConsumes('multipart/form-data')
  @Post('upload-file')
  @ApiBody({
    type: FileUploadDto,
    required: true,
  })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './public',
        filename: (req, file, callback) => {
          const originalName = file.originalname;
          callback(null, originalName);
        },
      }),
    }),
  )
  async uploadFiles(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: any,
  ) {
    const fileUrl = await this.restaurantsService.uploadFile(file, req);
    if (fileUrl) {
      return {
        status: true,
        statusText: 'file uploaded',
        message: 'file uploaded',
        fileUrl,
      };
    } else {
      return {
        status: false,
        statusText: 'failed to upload file',
        message: 'failed to upload file',
      };
    }
  }
}