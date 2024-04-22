import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/schemas/restaurants.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './Category/schemas/Category.module';
import { ComboModule } from './Combo/Schema/combo.module';
import { APP_PIPE } from '@nestjs/core';
import { NursingModule } from './Nursing Details/schemas/Nursing.module';
import { MedicineStockModule } from './Medicine Stock/schema/Medicinestock.module';
import { AuthModule } from './auth/auth.module';

// import { fileUploadModule } from './file-upload/file-upload.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI_LOCAL),
    CategoryModule,
    RestaurantsModule,
    ComboModule,
    NursingModule,
    MedicineStockModule,
    AuthModule,
  ],

  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
