import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComboSchema } from './combo.schema';
import { ComboController } from './combo.controller';
import { ComboService } from './combo.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Combo',
        schema: ComboSchema,
      },
    ]),
  ],
  controllers: [ComboController],
  providers: [ComboService],
})
export class ComboModule {}
