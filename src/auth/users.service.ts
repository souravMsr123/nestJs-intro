import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";

import * as bcrypt from 'bcryptjs';

import { User } from './user.model';

export type User = any;

@Injectable()
export class UsersService {
    // private readonly users: User[];

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {

    }
    async createUser(user: User) {
        const newUser = await new this.userModel(user)

        const result = newUser.save();



        return result;


    }

    async findOne(email: string) {
        return await this.userModel.findOne({
            email: email
        });


    }
}