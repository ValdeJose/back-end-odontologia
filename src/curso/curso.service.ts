import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Docente } from 'src/docente/entities/docente.entity';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,
  ) {}
  create(createCursoDto: CreateCursoDto) {
    return this.cursoRepository.save(createCursoDto);
  }

  findAll() {
    return this.cursoRepository.find();
  }

  findOne(id: number) {
    return this.cursoRepository.findOneBy({id});
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return this.cursoRepository.update(id, updateCursoDto);
  }

  remove(id: number) {
    return this.cursoRepository.delete(id);
  }
}
