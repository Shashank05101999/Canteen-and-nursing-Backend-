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
exports.ComboService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const combo_schema_1 = require("./combo.schema");
const mongoose = require("mongoose");
let ComboService = class ComboService {
    constructor(comboModel) {
        this.comboModel = comboModel;
    }
    async findAll(query) {
        const comPerpage = 2;
        console.log('query', query);
        let filter = {};
        console.log('filter', filter);
        if (query && query.name) {
            filter = { name: { $regex: query.name, $options: 'i' } };
        }
        if (query && query.category) {
            filter = { category: query.category };
            console.log('filter234567', filter);
        }
        const combo = await this.comboModel
            .find(filter)
            .exec();
        return combo;
    }
    async create(combo) {
        console.log('combo', combo);
        const com = new this.comboModel(combo);
        console.log('com', com);
        return com.save();
    }
    async FindByID(id) {
        const combo = await this.comboModel.findById(id);
        if (!combo) {
            throw new common_1.NotFoundException('Combo item not found');
        }
        return combo;
    }
    async UpdateByID(id, combo) {
        return await this.comboModel.findByIdAndUpdate(id, combo, {
            new: true,
            runValidators: true,
        });
    }
    async deleteById(id) {
        return await this.comboModel.findByIdAndDelete(id);
    }
};
exports.ComboService = ComboService;
exports.ComboService = ComboService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(combo_schema_1.Combo.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], ComboService);
//# sourceMappingURL=combo.service.js.map