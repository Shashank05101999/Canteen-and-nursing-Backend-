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
exports.PrescriptionContoller = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const prescription_service_1 = require("./prescription.service");
const Create_prescription_dto_1 = require("../Dto/Create-prescription.dto");
const Update_prescription_dto_1 = require("../Dto/Update-prescription.dto");
let PrescriptionContoller = class PrescriptionContoller {
    constructor(prescriptionservices) {
        this.prescriptionservices = prescriptionservices;
    }
    async GetAllPrescription() {
        return this.prescriptionservices.findAll();
    }
    async CreatePresciption(createnursingdto) {
        return this.prescriptionservices.create(createnursingdto);
    }
    async GetPrescription(id) {
        return this.prescriptionservices.findByID(id);
    }
    async updateRestaurant(id, updateprescription) {
        return this.prescriptionservices.updateById(id, updateprescription);
    }
    async DeletePrescription(id) {
        await this.prescriptionservices.findByID(id);
        const deleteprescription = await this.prescriptionservices.deleteById(id);
        if (deleteprescription) {
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
exports.PrescriptionContoller = PrescriptionContoller;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrescriptionContoller.prototype, "GetAllPrescription", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Create_prescription_dto_1.CreatePrescriptionDto]),
    __metadata("design:returntype", Promise)
], PrescriptionContoller.prototype, "CreatePresciption", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrescriptionContoller.prototype, "GetPrescription", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Update_prescription_dto_1.UpdatePresciptionDto]),
    __metadata("design:returntype", Promise)
], PrescriptionContoller.prototype, "updateRestaurant", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrescriptionContoller.prototype, "DeletePrescription", null);
exports.PrescriptionContoller = PrescriptionContoller = __decorate([
    (0, common_2.Controller)('prescription'),
    __metadata("design:paramtypes", [prescription_service_1.PrescriptionService])
], PrescriptionContoller);
//# sourceMappingURL=prescription.controller.js.map