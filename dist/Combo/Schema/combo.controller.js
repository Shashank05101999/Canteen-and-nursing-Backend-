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
exports.ComboController = void 0;
const common_1 = require("@nestjs/common");
const combo_service_1 = require("./combo.service");
const filter_combo_dto_1 = require("../dto/filter-combo.dto");
const update_combo_dto_1 = require("../dto/update-combo.dto");
const Create_combo_dto_1 = require("../dto/Create-combo.dto");
let ComboController = class ComboController {
    constructor(comboService) {
        this.comboService = comboService;
    }
    async getAllCombo(query) {
        return this.comboService.findAll(query);
    }
    async createCombo(createComboDto) {
        return this.comboService.create(createComboDto);
    }
    async getCombo(id) {
        return this.comboService.FindByID(id);
    }
    async updateCombo(id, updateComboDto) {
        await this.comboService.FindByID(id);
        return this.comboService.UpdateByID(id, updateComboDto);
    }
    async deleteCombo(id) {
        await this.comboService.FindByID(id);
        const deletedCombo = await this.comboService.deleteById(id);
        if (deletedCombo) {
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
};
exports.ComboController = ComboController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_combo_dto_1.FilterComboDto]),
    __metadata("design:returntype", Promise)
], ComboController.prototype, "getAllCombo", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Create_combo_dto_1.CreateComboDto]),
    __metadata("design:returntype", Promise)
], ComboController.prototype, "createCombo", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComboController.prototype, "getCombo", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_combo_dto_1.default]),
    __metadata("design:returntype", Promise)
], ComboController.prototype, "updateCombo", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComboController.prototype, "deleteCombo", null);
exports.ComboController = ComboController = __decorate([
    (0, common_1.Controller)('combo'),
    __metadata("design:paramtypes", [combo_service_1.ComboService])
], ComboController);
//# sourceMappingURL=combo.controller.js.map