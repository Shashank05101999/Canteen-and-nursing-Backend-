import { JwtService } from '@nestjs/jwt';

export default class APIfeatures {
  static async assignJwtToken(
    userId: string,
    name: string,
    email: string,
    jwtService: JwtService,
  ): Promise<string> {
    const payload = { id: userId, Name: name, Email: email };
    const token = await jwtService.sign(payload);
    return token;
  }
}
console.log('sscdhk');
