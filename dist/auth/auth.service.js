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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schema/user.schema");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcryptjs");
const apifeatures_utils_1 = require("../utils/apifeatures.utils");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async signUp(signUpDto) {
        const { name, email, password } = signUpDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const user = await this.userModel.create({
                name,
                email,
                password: hashedPassword,
            });
            const token = await apifeatures_utils_1.default.assignJwtToken(user._id, user.email, user.name, this.jwtService);
            return { token };
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException('Duplicate  Email enterned');
            }
        }
    }
    async login(LoginDto) {
        const { email, password } = LoginDto;
        const user = await this.userModel.findOne({ email }).select('+password');
        if (!user) {
            throw new common_1.UnauthorizedException('invalid email');
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            throw new common_1.UnauthorizedException('invalid password');
        }
        const token = await apifeatures_utils_1.default.assignJwtToken(user._id, user.email, user.name, this.jwtService);
        console.log(user);
        return { token, user };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.AuthUser.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map