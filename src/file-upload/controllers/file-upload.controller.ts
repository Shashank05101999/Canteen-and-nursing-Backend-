// import {
//   Controller,
//   Post,
//   Req,
//   UploadedFile,
//   UseInterceptors,
// } from '@nestjs/common';
// import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import { Express } from 'express';
// import FileUploadService from '../services/file.upload.service';

// @Controller()
// @ApiTags('file upload')
// export default class FileUploadController {
//   constructor(private readonly fileUploadService: FileUploadService) {}

//   @ApiOperation({ summary: 'Upload file with image' })
//   @ApiConsumes('multipart/form-data')
//   @Post('upload-file')
//   @UseInterceptors(
//     FileInterceptor('image', {
//       storage: diskStorage({
//         destination: './uploads',
//       }),
//     }),
//   )
//   async uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req: any) {
//     const fileUrl = await this.fileUploadService.uploadFile(file, req);
//     if (fileUrl) {
//       return {
//         status: true,
//         statusText: 'file uploaded',
//         message: 'file uploaded',
//         fileUrl,
//       };
//     } else {
//       return {
//         status: false,
//         statusText: 'failed to upload file',
//         message: 'failed to upload file',
//       };
//     }
//   }
// }
