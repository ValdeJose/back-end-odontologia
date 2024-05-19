import { Injectable } from '@nestjs/common';
import { CreateAdmindetalleDto } from './dto/create-admindetalle.dto';
import { UpdateAdmindetalleDto } from './dto/update-admindetalle.dto';

@Injectable()
export class AdmindetalleService {
  create(createAdmindetalleDto: CreateAdmindetalleDto) {
    return 'This action adds a new admindetalle';
  }

  findAll() {
    return `This action returns all admindetalle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admindetalle`;
  }

  update(id: number, updateAdmindetalleDto: UpdateAdmindetalleDto) {
    return `This action updates a #${id} admindetalle`;
  }

  remove(id: number) {
    return `This action removes a #${id} admindetalle`;
  }
}
