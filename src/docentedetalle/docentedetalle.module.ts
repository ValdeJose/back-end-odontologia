import { Module } from '@nestjs/common';
import { DocentedetalleService } from './docentedetalle.service';
import { DocentedetalleController } from './docentedetalle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docentedetalle } from './entities/docentedetalle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Docentedetalle])],
  controllers: [DocentedetalleController],
  providers: [DocentedetalleService],
})
export class DocentedetalleModule {}
