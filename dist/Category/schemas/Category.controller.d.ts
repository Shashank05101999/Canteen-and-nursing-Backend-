import { Category } from './Category.schema';
import { CategoryService } from './Category.service';
import { updateCategoryDto } from './dto/update-Category.dto';
import { CreateCategoryDto } from './dto/create-Category.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class CategoryController {
    private categoryservices;
    constructor(categoryservices: CategoryService);
    getAllCAtegory(query: ExpressQuery): Promise<Category[]>;
    createCategory(createCategoryDto: CreateCategoryDto): Promise<Category>;
    getCategory(id: string): Promise<Category>;
    updateCategory(id: string, category: updateCategoryDto): Promise<Category>;
    deleteCategory(id: string): Promise<{
        deleted: Boolean;
    }>;
}
