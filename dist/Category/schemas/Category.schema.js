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
exports.CategorySchema = exports.Category = exports.CategoryArea = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var CategoryArea;
(function (CategoryArea) {
    CategoryArea["Fast_FOOD"] = "fast Food";
    CategoryArea["CAFE"] = "cafe";
    CategoryArea["FINE_DINNING"] = "Fine Dinning";
})(CategoryArea || (exports.CategoryArea = CategoryArea = {}));
let Category = class Category {
};
exports.Category = Category;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Category.prototype, "category", void 0);
exports.Category = Category = __decorate([
    (0, mongoose_1.Schema)()
], Category);
exports.CategorySchema = mongoose_1.SchemaFactory.createForClass(Category);
//# sourceMappingURL=Category.schema.js.map