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
exports.MedicineStockService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const Medicinestock_schema_1 = require("./Medicinestock.schema");
const mongoose = require("mongoose");
let MedicineStockService = class MedicineStockService {
    constructor(MedicineStockModel) {
        this.MedicineStockModel = MedicineStockModel;
    }
    async FindAll(query) {
        const keyword = query.keyword
            ? {
                MedicineName: {
                    $regex: query.keyword,
                    $options: 'i',
                },
            }
            : {};
        const medicinestock = await this.MedicineStockModel.find({ ...keyword });
        return medicinestock;
    }
    async Create(medicinestock) {
        const med = await this.MedicineStockModel.create(medicinestock);
        return med.save();
    }
    async findByID(id) {
        const medicinestock = await this.MedicineStockModel.findById(id);
        if (!medicinestock) {
            throw new common_1.NotFoundException('medicine item not found');
        }
        return medicinestock;
    }
    async updateById(id, medicinestock) {
        return await this.MedicineStockModel.findByIdAndUpdate(id, medicinestock, {
            new: true,
            runValidators: true,
        });
    }
    async DeleteById(id) {
        return await this.MedicineStockModel.findByIdAndDelete(id);
    }
};
exports.MedicineStockService = MedicineStockService;
exports.MedicineStockService = MedicineStockService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Medicinestock_schema_1.MedicineStock.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], MedicineStockService);
//# sourceMappingURL=Medicinestock.service.js.map