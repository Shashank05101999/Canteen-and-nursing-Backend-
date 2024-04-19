"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NursingModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const Nursing_schema_1 = require("./Nursing.schema");
const Nursing_controller_1 = require("./Nursing.controller");
const Nursing_service_1 = require("./Nursing.service");
let NursingModule = class NursingModule {
};
exports.NursingModule = NursingModule;
exports.NursingModule = NursingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Nursing',
                    schema: Nursing_schema_1.NursingSchema,
                },
            ]),
        ],
        controllers: [Nursing_controller_1.NursingController],
        providers: [Nursing_service_1.NursingService],
    })
], NursingModule);
//# sourceMappingURL=Nursing.module.js.map