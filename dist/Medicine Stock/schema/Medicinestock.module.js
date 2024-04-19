"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicineStockModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const Medicinestock_schema_1 = require("./Medicinestock.schema");
const Medicinestock_controller_1 = require("./Medicinestock.controller");
const Medicinestock_service_1 = require("./Medicinestock.service");
let MedicineStockModule = class MedicineStockModule {
};
exports.MedicineStockModule = MedicineStockModule;
exports.MedicineStockModule = MedicineStockModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'MedicineStock',
                    schema: Medicinestock_schema_1.MedicineSchema,
                },
            ]),
        ],
        controllers: [Medicinestock_controller_1.MedicineStockController],
        providers: [Medicinestock_service_1.MedicineStockService],
    })
], MedicineStockModule);
//# sourceMappingURL=Medicinestock.module.js.map