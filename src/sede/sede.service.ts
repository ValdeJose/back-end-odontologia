import { Injectable } from '@nestjs/common';
import { CreateSedeDto } from './dto/create-sede.dto';
import { UpdateSedeDto } from './dto/update-sede.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sede } from './entities/sede.entity';

@Injectable()
export class SedeService {
  constructor(
    @InjectRepository(Sede)
    private readonly sedeRepository: Repository<Sede>,
  ) {}

  async create(createSedeDto: CreateSedeDto) {
    return this.sedeRepository.save(createSedeDto);
  }

  findAll() {
    return this.sedeRepository.find();
  }

  findOne(id: number) {
    return this.sedeRepository.findOneBy({id});
  }

  update(id: number, updateSedeDto: UpdateSedeDto) {
    return this.sedeRepository.update(id, updateSedeDto);
  }

  remove(id: number) {
    return this.sedeRepository.delete(id);
  }
}
