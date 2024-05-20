import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admini } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admini)
    private readonly adminRepository: Repository<Admini>,
  ) {}
  create(createAdminDto: CreateAdminDto) {
    return this.adminRepository.save(createAdminDto);
  }

  findAll() {
    return this.adminRepository.find();
  }

  findOne(id: number) {
    return this.adminRepository.findOneBy({id});
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminRepository.update(id, updateAdminDto);
  }

  remove(id: number) {
    return this.adminRepository.delete(id);
  }
}
