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
exports.NursingSchema = exports.Nursing = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Nursing = class Nursing {
};
exports.Nursing = Nursing;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Nursing.prototype, "StudentName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Nursing.prototype, "Allergies", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Nursing.prototype, "Medication", void 0);
exports.Nursing = Nursing = __decorate([
    (0, mongoose_1.Schema)()
], Nursing);
exports.NursingSchema = mongoose_1.SchemaFactory.createForClass(Nursing);
//# sourceMappingURL=Nursing.schema.js.map