import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
  
  import { SellerGuard } from '../guards/seller.guard';
  import { Category } from '../types/Category';
  import { User as UserDocument } from '../types/user';
  import { User } from '../utilities/user.decorator';
  import { CreateCategoryDTO, UpdateCategoryDTO } from './category.dto';
  import { CategoryService } from './category.service';
  
  @Controller('category')
  export class CategoryController {
    constructor(private categoryService: CategoryService) {}
  
    @Get()
    async listAll(): Promise<Category[]> {
      return await this.categoryService.findAll();
    }
  
    @Post()
    @UseGuards(AuthGuard('jwt'), SellerGuard)
    async create(
      @Body() category: CreateCategoryDTO,
    ): Promise<Category> {
      return await this.categoryService.create(category);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'), SellerGuard)
    async update(
      @Param('id') id: string,
      @Body() category: UpdateCategoryDTO,
    ): Promise<Category> {
    
      return await this.categoryService.update(id, category);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'), SellerGuard)
    async delete(
      @Param('id') id: string,
    ): Promise<Category> {
      return await this.categoryService.delete(id);
    }
  }
  