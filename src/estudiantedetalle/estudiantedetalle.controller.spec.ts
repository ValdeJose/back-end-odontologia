import { Test, TestingModule } from '@nestjs/testing';
import { EstudiantedetalleController } from './estudiantedetalle.controller';
import { EstudiantedetalleService } from './estudiantedetalle.service';

describe('EstudiantedetalleController', () => {
  let controller: EstudiantedetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudiantedetalleController],
      providers: [EstudiantedetalleService],
    }).compile();

    controller = module.get<EstudiantedetalleController>(EstudiantedetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
