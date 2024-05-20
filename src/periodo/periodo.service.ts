import { Injectable } from '@nestjs/common';
import { CreatePeriodoDto } from './dto/create-periodo.dto';
import { UpdatePeriodoDto } from './dto/update-periodo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Periodo } from './entities/periodo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PeriodoService {
  constructor(
    @InjectRepository(Periodo)
    private readonly periodoRepository: Repository<Periodo>,
  ) {}

  async create(createPeriodoDto: CreatePeriodoDto) {
    return this.periodoRepository.save(createPeriodoDto);
  }

  findAll() {
    return this.periodoRepository.find();
  }

  findOne(id: number) {
    return this.periodoRepository.findOneBy({id});
  }

  update(id: number, updatePeriodoDto: UpdatePeriodoDto) {
    return this.periodoRepository.update(id, updatePeriodoDto);
  }

  remove(id: number) {
    return this.periodoRepository.delete(id);
  }
}
