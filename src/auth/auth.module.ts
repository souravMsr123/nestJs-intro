import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.model';
import { AuthController } from './auth.controller';
//import { jwtConstants } from './constants';

@Module({
    imports: [
        PassportModule,
        MongooseModule.forFeature([{
            name: 'User',
            schema: UserSchema
        }]),
        JwtModule.register({
            secret: 'uhsofhlwh234236n345kjhkadhf',
            signOptions: { expiresIn: '3600' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy, UsersService],
    exports: [AuthService, UsersService],
})
export class AuthModule { }