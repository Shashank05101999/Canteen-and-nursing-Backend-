"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const Category_service_1 = require("./Category.service");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const update_Category_dto_1 = require("./dto/update-Category.dto");
const create_Category_dto_1 = require("./dto/create-Category.dto");
let CategoryController = class CategoryController {
    constructor(categoryservices) {
        this.categoryservices = categoryservices;
    }
    async getAllCAtegory() {
        return this.categoryservices.findAll();
    }
    async createCategory(createCategoryDto) {
        return this.categoryservices.create(createCategoryDto);
    }
    async getCategory(id) {
        return this.categoryservices.findByID(id);
    }
    async updateCategory(id, category) {
        return this.categoryservices.updateById(id, category);
    }
    async deleteCategory(id) {
        await this.categoryservices.findByID(id);
        const restaurant = this.categoryservices.deleteById(id);
        if (restaurant) {
            return {
                deleted: true,
            };
        }
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getAllCAtegory", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategory", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_Category_dto_1.updateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteCategory", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [Category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=Category.controller.js.map