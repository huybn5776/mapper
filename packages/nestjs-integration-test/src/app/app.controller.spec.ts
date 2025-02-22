import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { getUser, getUserVm } from './models/get-user';

describe('AppController', () => {
  let app: INestApplication;

  const mockedAppService = {
    getData: jest.fn(),
    getUserVm: jest.fn(),
    getRawUser: jest.fn(),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AppService)
      .useValue(mockedAppService)
      .compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /', () => {
    mockedAppService.getData.mockReturnValueOnce({ message: 'test message' });

    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({ message: 'test message' });
  });

  it('GET /user', () => {
    mockedAppService.getUserVm.mockReturnValueOnce(getUserVm());

    return request(app.getHttpServer())
      .get('/user')
      .expect(200)
      .expect(JSON.parse(JSON.stringify(getUserVm())));
  });

  it('GET /raw', () => {
    mockedAppService.getRawUser.mockReturnValueOnce(getUser());

    return request(app.getHttpServer())
      .get('/raw')
      .expect(200)
      .expect(JSON.parse(JSON.stringify(getUserVm())));
  });

  it('GET /raw-array', () => {
    mockedAppService.getRawUser.mockReturnValueOnce(getUser());

    return request(app.getHttpServer())
      .get('/raw-array')
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual(
          JSON.parse(JSON.stringify([getUserVm()]))
        );
      });
  });

  it('POST /from-body', () => {
    return request(app.getHttpServer())
      .post('/from-body')
      .set('Content-Type', 'application/json')
      .send(getUser())
      .expect(201)
      .expect(JSON.parse(JSON.stringify(getUserVm())));
  });

  it('POST /from-body-data', () => {
    return request(app.getHttpServer())
      .post('/from-body-data')
      .set('Content-Type', 'application/json')
      .send({ data: getUser() })
      .expect(201)
      .expect({ vm: JSON.parse(JSON.stringify(getUserVm())) });
  });

  it('POST /from-body-array', () => {
    return request(app.getHttpServer())
      .post('/from-body-array')
      .set('Content-Type', 'application/json')
      .send({ data: [getUser()] })
      .expect(201)
      .expect({ vm: [JSON.parse(JSON.stringify(getUserVm()))] });
  });
});
