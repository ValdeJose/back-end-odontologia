import { Module } from '@nestjs/common';
import { EstudiantedetalleService } from './estudiantedetalle.service';
import { EstudiantedetalleController } from './estudiantedetalle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiantedetalle } from './entities/estudiantedetalle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estudiantedetalle])],
  controllers: [EstudiantedetalleController],
  providers: [EstudiantedetalleService],
})
export class EstudiantedetalleModule {}
