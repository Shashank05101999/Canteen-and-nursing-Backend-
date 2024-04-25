"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const restaurants_module_1 = require("./restaurants/schemas/restaurants.module");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const Category_module_1 = require("./Category/schemas/Category.module");
const combo_module_1 = require("./Combo/Schema/combo.module");
const core_1 = require("@nestjs/core");
const Nursing_module_1 = require("./Nursing Details/schemas/Nursing.module");
const Medicinestock_module_1 = require("./Medicine Stock/schema/Medicinestock.module");
const auth_module_1 = require("./auth/auth.module");
const prescription_module_1 = require("./prescriptions/schema/prescription.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.DB_URI_LOCAL),
            Category_module_1.CategoryModule,
            restaurants_module_1.RestaurantsModule,
            combo_module_1.ComboModule,
            Nursing_module_1.NursingModule,
            Medicinestock_module_1.MedicineStockModule,
            auth_module_1.AuthModule,
            prescription_module_1.PrescriptionModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_PIPE,
                useClass: common_1.ValidationPipe,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map