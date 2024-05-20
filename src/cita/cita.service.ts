import { Injectable } from '@nestjs/common';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cita } from './entities/cita.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitaService {
  constructor(
    @InjectRepository(Cita)
    private readonly citaRepository: Repository<Cita>,
  ) {}

  async create(createCitaDto: CreateCitaDto) {
    return this.citaRepository.save(createCitaDto);
  }

  findAll() {
    return this.citaRepository.find();
  }

  findOne(id: number) {
    return this.citaRepository.findOneBy({id});
  }

  update(id: number, updateCitaDto: UpdateCitaDto) {
    return this.citaRepository.update(id, updateCitaDto);
  }

  remove(id: number) {
    return this.citaRepository.delete(id);
  }
}
