import { Injectable } from '@nestjs/common';
import { CreateAdmindetalleDto } from './dto/create-admindetalle.dto';
import { UpdateAdmindetalleDto } from './dto/update-admindetalle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admindetalle } from './entities/admindetalle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdmindetalleService {
  constructor(
    @InjectRepository(Admindetalle)
    private readonly admindetalleRepository: Repository<Admindetalle>,
  ) {}

  create(createAdmindetalleDto: CreateAdmindetalleDto) {
    return this.admindetalleRepository.save(createAdmindetalleDto);
  }

  findAll() {
    return this.admindetalleRepository.find();
  }

  findOne(id: number) {
    return this.admindetalleRepository.findOneBy({id});
  }

  update(id: number, updateAdmindetalleDto: UpdateAdmindetalleDto) {
    return this.admindetalleRepository.update(id, updateAdmindetalleDto);
  }

  remove(id: number) {
    return this.admindetalleRepository.delete(id);
  }
}
