import { Injectable } from '@nestjs/common';
import { CreateEstudiantedetalleDto } from './dto/create-estudiantedetalle.dto';
import { UpdateEstudiantedetalleDto } from './dto/update-estudiantedetalle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiantedetalle } from './entities/estudiantedetalle.entity';

@Injectable()
export class EstudiantedetalleService {
  constructor(
    @InjectRepository(Estudiantedetalle)
    private readonly estudiantedetalleRepository: Repository<Estudiantedetalle>,
  ) {}

  create(createEstudiantedetalleDto: CreateEstudiantedetalleDto) {
    return this.estudiantedetalleRepository.save(createEstudiantedetalleDto);
  }

  findAll() {
    return this.estudiantedetalleRepository.find();
  }

  findOne(id: number) {
    return this.estudiantedetalleRepository.findOneBy({id});
  }

  update(id: number, updateEstudiantedetalleDto: UpdateEstudiantedetalleDto) {
    return this.estudiantedetalleRepository.update(id, updateEstudiantedetalleDto);
  }

  remove(id: number) {
    return this.estudiantedetalleRepository.delete(id);
  }
}
