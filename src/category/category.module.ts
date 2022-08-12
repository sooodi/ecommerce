import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CategorySchema } from '../models/Category.schema';
import { SharedModule } from '../shared/shared.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]),
    SharedModule,
  ],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
