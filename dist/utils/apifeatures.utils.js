"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APIfeatures {
    static async assignJwtToken(userId, name, email, jwtService) {
        const payload = { id: userId, Name: name, Email: email };
        const token = await jwtService.sign(payload);
        return token;
    }
}
exports.default = APIfeatures;
console.log('sscdhk');
//# sourceMappingURL=apifeatures.utils.js.map