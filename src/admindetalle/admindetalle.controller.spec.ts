import { Test, TestingModule } from '@nestjs/testing';
import { AdmindetalleController } from './admindetalle.controller';
import { AdmindetalleService } from './admindetalle.service';

describe('AdmindetalleController', () => {
  let controller: AdmindetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdmindetalleController],
      providers: [AdmindetalleService],
    }).compile();

    controller = module.get<AdmindetalleController>(AdmindetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
