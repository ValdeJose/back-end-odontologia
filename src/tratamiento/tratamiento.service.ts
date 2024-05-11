import { Injectable } from '@nestjs/common';
import { CreateTratamientoDto } from './dto/create-tratamiento.dto';
import { UpdateTratamientoDto } from './dto/update-tratamiento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tratamiento } from './entities/tratamiento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TratamientoService {
  constructor(
    @InjectRepository(Tratamiento)
    private readonly tratamientoRepository: Repository<Tratamiento>,
  ) {}

  create(createTratamientoDto: CreateTratamientoDto) {
    return this.tratamientoRepository.save(createTratamientoDto);
  }

  findAll() {
    return this.tratamientoRepository.find();
  }

  findOne(id: number) {
    return this.tratamientoRepository.findOneBy({id});
  }

  update(id: number, updateTratamientoDto: UpdateTratamientoDto) {
    return this.tratamientoRepository.update(id, updateTratamientoDto);
  }

  remove(id: number) {
    return this.tratamientoRepository.delete(id);
  }
}
