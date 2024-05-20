import { Module } from '@nestjs/common';
import { AdmindetalleService } from './admindetalle.service';
import { AdmindetalleController } from './admindetalle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admindetalle } from './entities/admindetalle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admindetalle])],
  controllers: [AdmindetalleController],
  providers: [AdmindetalleService],
})
export class AdmindetalleModule {}
