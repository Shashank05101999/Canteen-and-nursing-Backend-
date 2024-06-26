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
exports.NursingService = void 0;
const common_1 = require("@nestjs/common");
const Nursing_schema_1 = require("./Nursing.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let NursingService = class NursingService {
    constructor(nursingmodel) {
        this.nursingmodel = nursingmodel;
    }
    async findAll(query) {
        const keyword = query.keyword
            ? {
                StudentName: {
                    $regex: query.keyword,
                    $options: 'i',
                },
            }
            : {};
        const nursing = await this.nursingmodel.find({ ...keyword });
        return nursing;
    }
    async create(createnursingdto) {
        const Nur = await this.nursingmodel.create(createnursingdto);
        return Nur.save();
    }
    async findByID(id) {
        const nursing = await this.nursingmodel.findById(id);
        if (!nursing) {
            throw new common_1.NotFoundException('Not found the student');
        }
        return nursing;
    }
    async updateById(id, updatenursingdto) {
        return await this.nursingmodel.findByIdAndUpdate(id, updatenursingdto, {
            new: true,
            runValidators: true,
        });
    }
    async deleteById(id) {
        return await this.nursingmodel.findByIdAndDelete(id);
    }
};
exports.NursingService = NursingService;
exports.NursingService = NursingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(Nursing_schema_1.Nursing.name)),
    __metadata("design:paramtypes", [mongoose_1.default.Model])
], NursingService);
//# sourceMappingURL=Nursing.service.js.map