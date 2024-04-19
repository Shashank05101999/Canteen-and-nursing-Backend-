import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/signup.dto";
import { User } from "./schema/user.schema";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    SignUp(signUpDto: SignUpDto): Promise<User>;
}
