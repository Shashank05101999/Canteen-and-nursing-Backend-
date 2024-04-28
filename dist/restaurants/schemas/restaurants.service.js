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
exports.RestaurantsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const restaurant_schema_1 = require("./restaurant.schema");
let RestaurantsService = class RestaurantsService {
    constructor(restaurantModel) {
        this.restaurantModel = restaurantModel;
    }
    async findAll(query) {
        const resPerPage = 2;
        console.log('query', query);
        let filter = {};
        if (query && query.name) {
            filter = { name: { $regex: query.name, $options: 'i' } };
        }
        console.log('filter', filter);
        const restaurants = await this.restaurantModel
            .find(filter)
            .exec();
        return restaurants;
    }
    async create(createRestaurantDto) {
        const res = await this.restaurantModel.create(createRestaurantDto);
        return res.save();
    }
    async findByID(id) {
        const restaurant = await this.restaurantModel.findById(id);
        if (!restaurant) {
            throw new common_1.NotFoundException('Food item not found');
        }
        return restaurant;
    }
    async updateById(id, updateRestaurantDto) {
        return await this.restaurantModel.findByIdAndUpdate(id, updateRestaurantDto);
    }
    async deleteById(id) {
        return await this.restaurantModel.findByIdAndDelete(id);
    }
    async uploadFile(file, req) {
        if (file) {
            const fileUrl = req.protocol + '://' + req.headers.host + '/' + file.filename;
            console.log('fileUrl', fileUrl);
            const newFile = await this.restaurantModel.create({ imageUrl: fileUrl });
            return newFile ? fileUrl : false;
        }
        else {
            return false;
        }
    }
    async uploadFiles(files, req) {
        const fileUrls = [];
        console.log('files', files);
        for (const file of files) {
            const fileUrl = req.protocol + '://' + req.headers.host + '/' + file.filename;
            const newFile = await this.restaurantModel.create({ images: [fileUrl] });
            if (newFile) {
                fileUrls.push(fileUrl);
            }
        }
        return fileUrls;
    }
    async updateFile(fileId, file, req) {
        if (file) {
            const fileUrl = req.protocol + '://' + req.headers.host + '/' + file.filename;
            console.log('fileUrl', fileUrl);
            const existingFile = await this.restaurantModel.findById(fileId);
            if (!existingFile) {
                return false;
            }
            existingFile.fileurl = fileUrl;
            await existingFile.save();
            return fileUrl;
        }
        else {
            return false;
        }
    }
};
exports.RestaurantsService = RestaurantsService;
exports.RestaurantsService = RestaurantsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(restaurant_schema_1.Restaurant.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], RestaurantsService);
//# sourceMappingURL=restaurants.service.js.map