import { Injectable } from '@nestjs/common';
import { CreateClaseDto } from './dto/create-clase.dto';
import { UpdateClaseDto } from './dto/update-clase.dto';
import { Clase } from './entities/clase.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClasesService {
  constructor(
    @InjectRepository(Clase)
    private readonly claseRepository: Repository<Clase>,
  ) {}
  async create(createClaseDto: CreateClaseDto) {
    return this.claseRepository.save(createClaseDto);
  }

  findAll() {
    return this.claseRepository.find();
  }

  findOne(id: number) {
    return this.claseRepository.findOneBy({id})
  }

  update(id: number, updateClaseDto: UpdateClaseDto) {
    return this.claseRepository.update(id, updateClaseDto);
  }

  remove(id: number) {
    return this.claseRepository.delete(id);
  }
}
