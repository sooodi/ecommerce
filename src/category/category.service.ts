import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Category } from '../types/Category';
import { CreateCategoryDTO, UpdateCategoryDTO } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectModel('Category') private categoryModel: Model<Category>) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find();
  }

  async create(categoryDTO: CreateCategoryDTO): Promise<Category> {
    const category = await this.categoryModel.create({
      ...categoryDTO
    });
    await category.save();
    return category;
  }

  async update(
    id: string,
    categoryDTO: UpdateCategoryDTO,
  ): Promise<Category> {
    const category = await this.categoryModel.findById(id);
    await category.update(categoryDTO);
    return await this.categoryModel.findById(id);
  }

  async delete(id: string): Promise<Category> {
    const category = await this.categoryModel.findById(id);
    await category.remove();
    return category;
  }
}
