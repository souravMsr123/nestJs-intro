import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AuthModule } from '../src/auth/auth.module';
import { AuthController } from '../src/auth/auth.controller';
import { AuthService } from '../src/auth/auth.service';
import { UsersService } from '../src/auth/users.service';
import { INestApplication } from '@nestjs/common';
import { AppModule } from 'src/app.module';


describe('AuthController', () => {

    let authController: AuthController;
    let authService: AuthService;
    let userService: UsersService;

    let app: INestApplication;

    authController = new AuthController(authService);

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/login (POST)', () => {
        return request(app.getHttpServer())
            .get('/login')
            .expect(200)
    })

})