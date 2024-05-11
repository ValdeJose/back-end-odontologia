import { Test, TestingModule } from '@nestjs/testing';
import { DocentedetalleController } from './docentedetalle.controller';
import { DocentedetalleService } from './docentedetalle.service';

describe('DocentedetalleController', () => {
  let controller: DocentedetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocentedetalleController],
      providers: [DocentedetalleService],
    }).compile();

    controller = module.get<DocentedetalleController>(DocentedetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
