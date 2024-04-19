import { Module } from '@nestjs/common';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantSchema } from './restaurant.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule,
    MongooseModule.forFeature([
      {
        name: 'Restaurant',
        schema: RestaurantSchema,
      },
    ]),
  ],
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
})
export class RestaurantsModule {}
