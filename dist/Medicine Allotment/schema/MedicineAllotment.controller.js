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
exports.MedicineAllotmentController = void 0;
const common_1 = require("@nestjs/common");
const MedicineAllotment_service_1 = require("./MedicineAllotment.service");
const swagger_1 = require("@nestjs/swagger");
const CreateMedicineAllotmentDTO_1 = require("../dto/CreateMedicineAllotmentDTO");
const UpdateMedicineAllotmentDto_1 = require("../dto/UpdateMedicineAllotmentDto");
let MedicineAllotmentController = class MedicineAllotmentController {
    constructor(medicineallotmentservice) {
        this.medicineallotmentservice = medicineallotmentservice;
    }
    async GetAllMedicineAllotment(query) {
        return this.medicineallotmentservice.FindAll(query);
    }
    async CreateMedicineAllotment(createmedicineallotmentdto) {
        return this.medicineallotmentservice.Create(createmedicineallotmentdto);
    }
    async GetMedicineAlloment(id) {
        return this.medicineallotmentservice.findByID(id);
    }
    async UpdateMedicineAllotment(id, updatemedicineallotmentdto) {
        await this.medicineallotmentservice.findByID(id);
        return this.medicineallotmentservice.updateById(id, updatemedicineallotmentdto);
    }
    async DeletePrescription(id) {
        await this.medicineallotmentservice.findByID(id);
        const deleteprescription = await this.medicineallotmentservice.deleteById(id);
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
exports.MedicineAllotmentController = MedicineAllotmentController;
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'keyword', required: false }),
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return all Medicine Allotment data',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MedicineAllotmentController.prototype, "GetAllMedicineAllotment", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateMedicineAllotmentDTO_1.CreateMedicineAllotmentDto]),
    __metadata("design:returntype", Promise)
], MedicineAllotmentController.prototype, "CreateMedicineAllotment", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicineAllotmentController.prototype, "GetMedicineAlloment", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateMedicineAllotmentDto_1.UpdateMedicineAllotmentDto]),
    __metadata("design:returntype", Promise)
], MedicineAllotmentController.prototype, "UpdateMedicineAllotment", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicineAllotmentController.prototype, "DeletePrescription", null);
exports.MedicineAllotmentController = MedicineAllotmentController = __decorate([
    (0, common_1.Controller)('MedicineAllotment'),
    __metadata("design:paramtypes", [MedicineAllotment_service_1.MedicineAllotmentService])
], MedicineAllotmentController);
//# sourceMappingURL=MedicineAllotment.controller.js.map