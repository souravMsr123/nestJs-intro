import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from './user.model';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) { }

    async validateUser(email: string, password: string): Promise<any> {
        return await this.usersService.findOne(email);


    }

    async login(user: any) {
        return this.validateUser(user.email, user.password).then(async (userDta) => {
            const checkPass = await bcrypt.compare(user.password, userDta.password);
            console.log('checkpass', checkPass);

            if (checkPass) {
                const paylod = { name: userDta.name, email: userDta.email };

                const access_token = this.jwtService.sign(paylod);
                return {
                    access_token: access_token
                };
            } else {
                throw new NotFoundException('User not found');


            }

        });




    }

    async register(user: User): Promise<any> {
        return await bcrypt.hash(user.password, 10, async (err, hash) => {
            user.password = hash;

            return await this.usersService.createUser(user);


        })


    }
}