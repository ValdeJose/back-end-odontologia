import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ) {}

  create(createEstudianteDto: CreateEstudianteDto) {
    return this.estudianteRepository.save(createEstudianteDto);
  }

  findAll() {
    return this.estudianteRepository.find();
  }

  findOne(id: number) {
    return this.estudianteRepository.findOneBy({id});
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return this.estudianteRepository.update(id, updateEstudianteDto);
  }

  remove(id: number) {
    return this.estudianteRepository.delete(id);
  }
}
