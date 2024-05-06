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
exports.MedicineAllotmentService = void 0;
const common_1 = require("@nestjs/common");
const MedicineAllotment_schema_1 = require("./MedicineAllotment.schema");
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
let MedicineAllotmentService = class MedicineAllotmentService {
    constructor(medicineallotmentmodel) {
        this.medicineallotmentmodel = medicineallotmentmodel;
    }
    async FindAll(query) {
        const keyword = query.keyword
            ? {
                User: {
                    $regex: query.keyword,
                    $options: 'i',
                },
            }
            : {};
        const medicineallotment = await this.medicineallotmentmodel.find({
            ...keyword,
        });
        return medicineallotment;
    }
    async Create(createmedicineallomentdto) {
        const medicine = await this.medicineallotmentmodel.create(createmedicineallomentdto);
        return medicine.save();
    }
    async findByID(id) {
        const medicineallotment = await this.medicineallotmentmodel.findById(id);
        if (!medicineallotment) {
            throw new common_1.NotFoundException('medicine allotment  item not found');
        }
        return medicineallotment;
    }
    async updateById(id, updatemedicineallotmentdto) {
        return await this.medicineallotmentmodel.findByIdAndUpdate(id, updatemedicineallotmentdto, {
            new: true,
            runValidators: true,
        });
    }
    async deleteById(id) {
        return await this.medicineallotmentmodel.findByIdAndDelete(id);
    }
};
exports.MedicineAllotmentService = MedicineAllotmentService;
exports.MedicineAllotmentService = MedicineAllotmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(MedicineAllotment_schema_1.MedicineAllotment.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], MedicineAllotmentService);
//# sourceMappingURL=MedicineAllotment.service.js.map