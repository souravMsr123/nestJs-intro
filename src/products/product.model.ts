import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    posted_by: {
        type: String
    }
},
    {
        timestamps: true
    }
)

export interface Product extends mongoose.Document {
    id: string;
    title: string;
    desc: string;
    price: number;
    posted_by: string;


}