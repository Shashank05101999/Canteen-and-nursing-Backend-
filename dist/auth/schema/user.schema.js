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
exports.UserSchema = exports.AuthUser = exports.UserRoles = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["USER"] = "user";
})(UserRoles || (exports.UserRoles = UserRoles = {}));
let AuthUser = class AuthUser extends mongoose_2.Document {
};
exports.AuthUser = AuthUser;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AuthUser.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: [true, 'Duplicate email enterd'] }),
    __metadata("design:type", String)
], AuthUser.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ select: false }),
    __metadata("design:type", String)
], AuthUser.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: UserRoles,
        default: UserRoles.USER,
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AuthUser.prototype, "role", void 0);
exports.AuthUser = AuthUser = __decorate([
    (0, mongoose_1.Schema)()
], AuthUser);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(AuthUser);
//# sourceMappingURL=user.schema.js.map