import { Injectable, NotFoundException } from "@nestjs/common";

import { Product } from './product.model';

import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }


    private products: Product[] = [];

    /**
     * Service to create a new product
     * @param title 
     * @param desc 
     * @param price 
     */
    async insertProduct(title: string, desc: string, price: number) {
        const newProduct = new this.productModel({
            title,
            desc,
            price
        });

        const result = await newProduct.save();

        console.log('result', result);

        return result.id as string;
    }

    async getAllProducts() {
        const allProducts = await this.productModel.find();
        if (!allProducts) {
            throw new NotFoundException("You dont have product to show")
        }
        return allProducts.map(prod => ({
            id: prod.id,
            title: prod.title,
            desc: prod.desc,
            price: prod.price
        }));
    }

    async getSingleProduct(prodId: string) {
        const product = await this.findProduct(prodId);
        return product;
    }

    async updateProduct(prodId: string, title: string, desc: string, price: number) {
        //const [product, index] = this.findProduct(prodId);

        const updatedProduct = await this.findProduct(prodId);

        if (title) {
            updatedProduct.title = title;
        } if (desc) {
            updatedProduct.desc = desc;
        } if (price) {
            updatedProduct.price = price;
        }

        updatedProduct.save();
    }

    async deleteProduct(id: string) {
        await this.productModel.deleteOne({
            _id: id
        });

    }

    private async findProduct(id: string) {
        let prod;
        try {
            prod = await this.productModel.findById(id);
        } catch (e) {
            throw new NotFoundException('Product does not exist');
        }

        if (!prod) {
            throw new NotFoundException('Product does not exist');
        }

        return prod;
    }

}