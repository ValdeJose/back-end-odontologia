import { Test, TestingModule } from '@nestjs/testing';
import { AdmindetalleService } from './admindetalle.service';

describe('AdmindetalleService', () => {
  let service: AdmindetalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdmindetalleService],
    }).compile();

    service = module.get<AdmindetalleService>(AdmindetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
