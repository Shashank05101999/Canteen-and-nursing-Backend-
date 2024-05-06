"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicineAllotmentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const MedicineAllotment_schema_1 = require("./MedicineAllotment.schema");
const MedicineAllotment_controller_1 = require("./MedicineAllotment.controller");
const MedicineAllotment_service_1 = require("./MedicineAllotment.service");
let MedicineAllotmentModule = class MedicineAllotmentModule {
};
exports.MedicineAllotmentModule = MedicineAllotmentModule;
exports.MedicineAllotmentModule = MedicineAllotmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'MedicineAllotment',
                    schema: MedicineAllotment_schema_1.MedicineAllotmentSchema,
                },
            ]),
        ],
        controllers: [MedicineAllotment_controller_1.MedicineAllotmentController],
        providers: [MedicineAllotment_service_1.MedicineAllotmentService],
    })
], MedicineAllotmentModule);
//# sourceMappingURL=MedicineAllotment.module.js.map