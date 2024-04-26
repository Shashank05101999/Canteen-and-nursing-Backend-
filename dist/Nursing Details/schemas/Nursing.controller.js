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
exports.NursingController = void 0;
const common_1 = require("@nestjs/common");
const Nursing_service_1 = require("./Nursing.service");
const Create_Nursing_dto_1 = require("../Dto/Create-Nursing.dto");
const Update_nursing_dto_1 = require("../Dto/Update-nursing.dto");
let NursingController = class NursingController {
    constructor(nursingservices) {
        this.nursingservices = nursingservices;
    }
    async getAllNursing() {
        return this.nursingservices.findAll();
    }
    async createRestaurant(createnursingdto) {
        return this.nursingservices.create(createnursingdto);
    }
    async getRestaurant(id) {
        return this.nursingservices.findByID(id);
    }
    async updateRestaurant(id, updatenursingdto) {
        await this.nursingservices.findByID(id);
        return this.nursingservices.updateById(id, updatenursingdto);
    }
    async deleteRestaurant(id) {
        await this.nursingservices.findByID(id);
        const deletedNursing = await this.nursingservices.deleteById(id);
        if (deletedNursing) {
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
exports.NursingController = NursingController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NursingController.prototype, "getAllNursing", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Create_Nursing_dto_1.CreateNursingDto]),
    __metadata("design:returntype", Promise)
], NursingController.prototype, "createRestaurant", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NursingController.prototype, "getRestaurant", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Update_nursing_dto_1.UpdateNursingDto]),
    __metadata("design:returntype", Promise)
], NursingController.prototype, "updateRestaurant", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NursingController.prototype, "deleteRestaurant", null);
exports.NursingController = NursingController = __decorate([
    (0, common_1.Controller)('nursings'),
    __metadata("design:paramtypes", [Nursing_service_1.NursingService])
], NursingController);
//# sourceMappingURL=Nursing.controller.js.map