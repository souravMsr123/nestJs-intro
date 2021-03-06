import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';

import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProductModule, AuthModule, MongooseModule.forRoot('mongodb://root@localhost/nestjs-intro')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
