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
exports.MedicineStockController = void 0;
const common_1 = require("@nestjs/common");
const Medicinestock_service_1 = require("./Medicinestock.service");
const CreateMedicineStock_1 = require("../Dto/CreateMedicineStock");
const UpdateMedicineStock_1 = require("../Dto/UpdateMedicineStock");
let MedicineStockController = class MedicineStockController {
    constructor(medicinesstockservice) {
        this.medicinesstockservice = medicinesstockservice;
    }
    async GetAllMedicineStock() {
        return this.medicinesstockservice.FindAll();
    }
    async CreateMedicineStock(createMedicineStockDto) {
        return this.medicinesstockservice.Create(createMedicineStockDto);
    }
    async getmedicnestock(id) {
        return this.medicinesstockservice.findByID(id);
    }
    async updateMedicineStock(id, updateMedicineStockDto) {
        await this.medicinesstockservice.findByID(id);
        return this.medicinesstockservice.updateById(id, updateMedicineStockDto);
    }
    async deleteRestaurant(id) {
        await this.medicinesstockservice.findByID(id);
        const deletedmedicine = await this.medicinesstockservice.DeleteById(id);
        if (deletedmedicine) {
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
exports.MedicineStockController = MedicineStockController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MedicineStockController.prototype, "GetAllMedicineStock", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateMedicineStock_1.CreateMedicineStockDto]),
    __metadata("design:returntype", Promise)
], MedicineStockController.prototype, "CreateMedicineStock", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicineStockController.prototype, "getmedicnestock", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateMedicineStock_1.UpdateMedicineStockDto]),
    __metadata("design:returntype", Promise)
], MedicineStockController.prototype, "updateMedicineStock", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicineStockController.prototype, "deleteRestaurant", null);
exports.MedicineStockController = MedicineStockController = __decorate([
    (0, common_1.Controller)('medicinestocks'),
    __metadata("design:paramtypes", [Medicinestock_service_1.MedicineStockService])
], MedicineStockController);
//# sourceMappingURL=Medicinestock.controller.js.map