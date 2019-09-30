import { Controller, Get, Post, Header, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) { }

    @Post()
    async addProduct(@Body('title') title: string, @Body('desc') desc: string, @Body('price') price: number, @Body('posted_by') posted_by: string) {
        const createproduct = await this.productService.insertProduct(title, desc, price, posted_by);

        return {
            id: createproduct
        }
    }

    @Get()
    async getAllProducts() {
        const allProducts = await this.productService.getAllProducts();

        return allProducts;
    }

    @Get(':id')
    getProduct(@Param('id') id: string): any {
        return this.productService.getSingleProduct(id);
    }

    @Patch(':id')
    updateProduct(@Param('id') id: string, @Body('title') title: string, @Body('desc') desc: string, @Body('price') price: number): any {
        this.productService.updateProduct(id, title, desc, price);

        return {
            message: "Product updated successfully"
        }
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {

        await this.productService.deleteProduct(id);

        return {
            message: "Product deleted successfuly"
        };

    }




}