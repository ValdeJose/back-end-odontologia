import { Test, TestingModule } from '@nestjs/testing';
import { DocentedetalleService } from './docentedetalle.service';

describe('DocentedetalleService', () => {
  let service: DocentedetalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocentedetalleService],
    }).compile();

    service = module.get<DocentedetalleService>(DocentedetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
