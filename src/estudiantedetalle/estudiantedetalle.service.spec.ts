import { Test, TestingModule } from '@nestjs/testing';
import { EstudiantedetalleService } from './estudiantedetalle.service';

describe('EstudiantedetalleService', () => {
  let service: EstudiantedetalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstudiantedetalleService],
    }).compile();

    service = module.get<EstudiantedetalleService>(EstudiantedetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
