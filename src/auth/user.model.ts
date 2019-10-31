import * as mongoose from 'mongoose';
import * as paginate from 'mongoose-paginate';

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


UserSchema.plugin(paginate)

export interface User extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    password: string;
    title: string;
}