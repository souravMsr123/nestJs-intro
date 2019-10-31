import { Controller, Post, Body, Get, UseInterceptors, UploadedFile, NestInterceptor } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "./user.model";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }


    @Post('login')
    async login(@Body() user: User): Promise<any> {
        return this.authService.login(user);
    }

    @Post('register')
    async register(@Body() user: User): Promise<any> {
        return this.authService.register(user)



    }

    @Get()
    getHi(): string {
        return 'HI';
    }


    @Post('upload')
    @UseInterceptors()
    uploadFile(@UploadedFile() file) {
        console.log(file);
    }
}