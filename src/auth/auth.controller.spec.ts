import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

//import { AuthModule } from '../auth/auth.module';
import { AuthController } from '../auth/auth.controller';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../auth/users.service';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../app.module';
import { User } from './user.model';


describe('AuthController', () => {

    let authController: AuthController;
    let authService: AuthService;
    let userService: UsersService;

    let app;
    authController = new AuthController(authService);

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/auth/login (POST)', () => {
        return request(app.getHttpServer())
            .post('/auth/login')
            .send({
                email: "tony122423@icc.com",
                password: "12345",
            })
            .expect(201)

    })

    describe('register', () => {
        it('should create new user and return 200  status', async () => {
            const result = {
                id: '4975jhhhkl',
                name: 'sourav mishra',
                email: 'sourav@gmail.com',
                password: '1234',
                title: 'javascript ninja'
            };
            jest.spyOn(authController, 'register');
            expect(200);
        })
    })

})