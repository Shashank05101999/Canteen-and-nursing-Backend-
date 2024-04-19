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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantSchema = exports.Restaurant = exports.Category = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
var Category;
(function (Category) {
    Category["COMBO_FOOD"] = "Veg";
    Category["CAFE"] = "Combo";
    Category["COMBO_VEG_NONVEG"] = "Non-Veg";
})(Category || (exports.Category = Category = {}));
let Restaurant = class Restaurant {
};
exports.Restaurant = Restaurant;
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Restaurant.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Restaurant.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", Date)
], Restaurant.prototype, "expiredate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Restaurant.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Restaurant.prototype, "fileurl", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Restaurant.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Restaurant.prototype, "stars", void 0);
exports.Restaurant = Restaurant = __decorate([
    (0, mongoose_1.Schema)()
], Restaurant);
exports.RestaurantSchema = mongoose_1.SchemaFactory.createForClass(Restaurant);
//# sourceMappingURL=restaurant.schema.js.map