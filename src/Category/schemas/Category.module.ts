import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './Category.schema';
import { CategoryController } from './Category.controller';
import { CategoryService } from './Category.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Category',
        schema: CategorySchema,
      },
    ]),
  ],
  controllers: [CategoryController],

  providers: [CategoryService],
})
export class CategoryModule {}
