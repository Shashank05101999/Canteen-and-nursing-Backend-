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
exports.RestaurantsController = void 0;
const common_1 = require("@nestjs/common");
const restaurants_service_1 = require("./restaurants.service");
const update_restaurant_dto_1 = require("../dto/update-restaurant.dto");
const filter_restaurant_dto_1 = require("../dto/filter-restaurant.dto");
const create_restaurant_dto_1 = require("../dto/create-restaurant.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const swagger_1 = require("@nestjs/swagger");
const upload_file_dto_1 = require("../dto/upload-file.dto");
let RestaurantsController = class RestaurantsController {
    constructor(restaurantsService) {
        this.restaurantsService = restaurantsService;
    }
    async getAllRestaurants(query) {
        return this.restaurantsService.findAll(query);
    }
    async createRestaurant(createRestaurantDto) {
        return this.restaurantsService.create(createRestaurantDto);
    }
    async getRestaurant(id) {
        return this.restaurantsService.findByID(id);
    }
    async updateRestaurant(id, updateRestaurantDto) {
        return this.restaurantsService.updateById(id, updateRestaurantDto);
    }
    async deleteRestaurant(id) {
        await this.restaurantsService.findByID(id);
        const deletedRestaurant = await this.restaurantsService.deleteById(id);
        if (deletedRestaurant) {
            return {
                deleted: true,
            };
        }
        else {
            return {
                deleted: false,
            };
        }
    }
    async uploadFiles(file, req) {
        const fileUrl = await this.restaurantsService.uploadFile(file, req);
        if (fileUrl) {
            return {
                status: true,
                statusText: 'file uploaded',
                message: 'file uploaded',
                fileUrl,
            };
        }
        else {
            return {
                status: false,
                statusText: 'failed to upload file',
                message: 'failed to upload file',
            };
        }
    }
};
exports.RestaurantsController = RestaurantsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_restaurant_dto_1.filterRestauranDto]),
    __metadata("design:returntype", Promise)
], RestaurantsController.prototype, "getAllRestaurants", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_restaurant_dto_1.CreateRestaurantDto]),
    __metadata("design:returntype", Promise)
], RestaurantsController.prototype, "createRestaurant", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantsController.prototype, "getRestaurant", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_restaurant_dto_1.updateRestaurantDto]),
    __metadata("design:returntype", Promise)
], RestaurantsController.prototype, "updateRestaurant", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantsController.prototype, "deleteRestaurant", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Upload file with image' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.Post)('upload-file'),
    (0, swagger_1.ApiBody)({
        type: upload_file_dto_1.FileUploadDto,
        required: true,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './public',
            filename: (req, file, callback) => {
                const originalName = file.originalname;
                callback(null, originalName);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RestaurantsController.prototype, "uploadFiles", null);
exports.RestaurantsController = RestaurantsController = __decorate([
    (0, common_1.Controller)('restaurants'),
    __metadata("design:paramtypes", [restaurants_service_1.RestaurantsService])
], RestaurantsController);
//# sourceMappingURL=restaurants.controller.js.map