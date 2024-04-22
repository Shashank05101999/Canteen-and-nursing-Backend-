import { JwtService } from '@nestjs/jwt';
export default class APIfeatures {
    static assignJwtToken(userId: string, name: string, email: string, jwtService: JwtService): Promise<string>;
}
