import { Injectable } from '@nestjs/common';
import { CreateDocentedetalleDto } from './dto/create-docentedetalle.dto';
import { UpdateDocentedetalleDto } from './dto/update-docentedetalle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Docentedetalle } from './entities/docentedetalle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocentedetalleService {
  constructor(
    @InjectRepository(Docentedetalle)
    private readonly docentedetalleRepository: Repository<Docentedetalle>,
  ) {}

  create(createDocentedetalleDto: CreateDocentedetalleDto) {
    return this.docentedetalleRepository.save(createDocentedetalleDto);
  }

  findAll() {
    return this.docentedetalleRepository.find();
  }

  findOne(id: number) {
    return this.docentedetalleRepository.findOneBy({id});
  }

  update(id: number, updateDocentedetalleDto: UpdateDocentedetalleDto) {
    return this.docentedetalleRepository.update(id, updateDocentedetalleDto);
  }

  remove(id: number) {
    return this.docentedetalleRepository.delete(id);
  }
}
