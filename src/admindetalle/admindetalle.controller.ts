import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdmindetalleService } from './admindetalle.service';
import { CreateAdmindetalleDto } from './dto/create-admindetalle.dto';
import { UpdateAdmindetalleDto } from './dto/update-admindetalle.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('admindetalle')
@ApiBearerAuth()
@Controller('admindetalle')
export class AdmindetalleController {
  constructor(private readonly admindetalleService: AdmindetalleService) {}

  @Post()
  @ApiCreatedResponse({description: 'Ingreso Exitoso'})
  @ApiForbiddenResponse({description: 'Ingreso Prohibido'})
  create(@Body() createAdmindetalleDto: CreateAdmindetalleDto) {
    return this.admindetalleService.create(createAdmindetalleDto);
  }

  @Get()
  findAll() {
    return this.admindetalleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.admindetalleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdmindetalleDto: UpdateAdmindetalleDto) {
    return this.admindetalleService.update(+id, updateAdmindetalleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.admindetalleService.remove(+id);
  }
}
