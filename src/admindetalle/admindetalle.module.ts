import { Module } from '@nestjs/common';
import { AdmindetalleService } from './admindetalle.service';
import { AdmindetalleController } from './admindetalle.controller';

@Module({
  controllers: [AdmindetalleController],
  providers: [AdmindetalleService],
})
export class AdmindetalleModule {}
