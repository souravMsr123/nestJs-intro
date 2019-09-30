import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    title: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
)

export interface User extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    password: string;
    title: string;
}