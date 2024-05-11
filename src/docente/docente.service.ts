import { Injectable } from '@nestjs/common';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocenteService {
  constructor(
    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,
  ) {}
  create(createDocenteDto: CreateDocenteDto) {
    return this.docenteRepository.save(createDocenteDto);
  }

  findAll() {
    return this.docenteRepository.find();
  }

  findOne(id: number) {
    return this.docenteRepository.findOneBy({id});
  }

  update(id: number, updateDocenteDto: UpdateDocenteDto) {
    return this.docenteRepository.update(id, updateDocenteDto);
  }

  remove(id: number) {
    return this.docenteRepository.delete(id);
  }
}
