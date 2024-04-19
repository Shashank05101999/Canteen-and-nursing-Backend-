// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { UploadFile } from '../file-upload.schema';
// import mongoose from 'mongoose';
// import { Restaurant } from 'src/restaurants/schemas/restaurant.schema';

// @Injectable()
// export default class FileUploadService {
//   //     const newFile = await this.restaurantModel.create({ images: [fileUrl] });
//   //     if (newFile) {
//   //       fileUrls.push(fileUrl);
//   //     }
//   //   }
//   //   return fileUrls;
//   // }

//   constructor(
//     @InjectModel(Restaurant.name)
//     private restaurantModel: mongoose.Model<Restaurant>,
//   ) {}

//   async uploadFile(
//     file: Express.Multer.File,
//     req: any,
//   ): Promise<string | boolean> {
//     if (file) {
//       const fileUrl =
//         req.protocol + '://' + req.headers.host + '/' + file.filename;
//       const newFile = await this.restaurantModel.create({ images: [fileUrl] });
//       return newFile ? fileUrl : false;
//     } else {
//       return false;
//     }
//   }

//   async uploadFiles(
//     files: Array<Express.Multer.File>,
//     req: any,
//   ): Promise<string[]> {
//     const fileUrls = [];

//     for (const file of files) {
//       const fileUrl =
//         req.protocol + '://' + req.headers.host + '/' + file.filename;
//       const newFile = await this.restaurantModel.create({ images: [fileUrl] });
//       if (newFile) {
//         fileUrls.push(fileUrl);
//       }
//     }

//     return fileUrls;
//   }

//   async getFiles(): Promise<string[]> {
//     try {
//       const files = await this.restaurantModel.find({}, { images: 1 }).exec();
//       const fileUrls = files.map((file: any) => file.images).flat();
//       return fileUrls;
//     } catch (error) {
//       console.error('Error while fetching files:', error);
//       throw error;
//     }
//   }
// }
