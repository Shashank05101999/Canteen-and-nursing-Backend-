import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Restaurant } from './restaurant.schema';
import { promises } from 'fs';
import { Query } from 'express-serve-static-core';
import { filterRestauranDto } from '../dto/filter-restaurant.dto';
import { updateRestaurantDto } from '../dto/update-restaurant.dto';
import { CreateRestaurantDto } from '../dto/create-restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: mongoose.Model<Restaurant>,
  ) {}

  // Get all Restaurant => GET /restaurants
  async findAll(query?: filterRestauranDto): Promise<Restaurant[]> {
    const resPerPage = 2;

    console.log('query', query);

    let filter = {}; // Initialize an empty filter object
    if (query && query.name) {
      // If name is present in the query, add it to the filter
      filter = { name: { $regex: query.name, $options: 'i' } };
    }
    console.log('filter', filter);
    const restaurants: Restaurant[] = await this.restaurantModel
      .find(filter)
      // .limit(resPerPage) // Limit the number of results per page
      .exec();

    return restaurants;
  }

  //create new restaurant =>  POST/ restaurants
  async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const res = await this.restaurantModel.create(createRestaurantDto);
    return res.save();
  }

  // Get a restaurant by ID =>/restaurants/:id
  async findByID(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(id);

    if (!restaurant) {
      throw new NotFoundException('Food item not found');
    }
    return restaurant;
  }

  //update a restaurant by ID => OUT /restaurants/:id
  async updateById(
    id: string,
    updateRestaurantDto: updateRestaurantDto,
  ): Promise<any> {
    return await this.restaurantModel.findByIdAndUpdate(
      id,
      updateRestaurantDto,
    );
  }

  //Delete a restaurants by Id => DELETE  /restaurants/:id
  async deleteById(id: string): Promise<Restaurant> {
    return await this.restaurantModel.findByIdAndDelete(id);
  }

  //--------------------------------------------------------------------
  // async uploadFile(
  //   file: Express.Multer.File,
  //   req: any,
  // ): Promise<string | boolean> {
  //   if (file) {
  //     const fileUrl =
  //       req.protocol + '://' + req.headers.host + '/' + file.filename;
  //     const newFile = await this.restaurantModel.create({ images: [fileUrl] });
  //     return newFile ? fileUrl : false;
  //   } else {
  //     return false;
  //   }
  // }

  async uploadFile(
    file: Express.Multer.File,
    req: any,
  ): Promise<string | boolean> {
    if (file) {
      // Assuming the file is stored in the public folder
      const fileUrl =
        req.protocol + '://' + req.headers.host + '/' + file.filename;

      console.log('fileUrl', fileUrl);

      // Assuming the field in the restaurantModel schema is named 'imageUrl'
      const newFile = await this.restaurantModel.create({ imageUrl: fileUrl });
      return newFile ? fileUrl : false;
    } else {
      return false;
    }
  }

  async uploadFiles(
    files: Array<Express.Multer.File>,
    req: any,
  ): Promise<string[]> {
    const fileUrls = [];

    console.log('files', files);

    for (const file of files) {
      const fileUrl =
        req.protocol + '://' + req.headers.host + '/' + file.filename;
      const newFile = await this.restaurantModel.create({ images: [fileUrl] });
      if (newFile) {
        fileUrls.push(fileUrl);
      }
    }

    return fileUrls;
  }
  async updateFile(
    fileId: string, // Assuming fileId is the unique identifier of the file in the database
    file: Express.Multer.File,
    req: any,
  ): Promise<string | boolean> {
    if (file) {
      const fileUrl = req.protocol + '://' + req.headers.host + '/' + file.filename;
  
      console.log('fileUrl', fileUrl);
  
      // Find the file by its unique identifier
      const existingFile = await this.restaurantModel.findById(fileId);
  
      if (!existingFile) {
        return false; // File not found
      }
  
      // Update the imageUrl property of the existing file
      existingFile.fileurl = fileUrl;
      await existingFile.save();
  
      return fileUrl;
    } else {
      return false;
    }
  }
  

}
