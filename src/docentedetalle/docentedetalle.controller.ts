import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocentedetalleService } from './docentedetalle.service';
import { CreateDocentedetalleDto } from './dto/create-docentedetalle.dto';
import { UpdateDocentedetalleDto } from './dto/update-docentedetalle.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('docentedetalle')
@ApiBearerAuth()
@Controller('docentedetalle')
export class DocentedetalleController {
  constructor(private readonly docentedetalleService: DocentedetalleService) {}

  @Post('create')
  @ApiCreatedResponse({description: 'Ingreso Exitoso'})
  @ApiForbiddenResponse({description: 'Ingreso Prohibido'})
  create(@Body() createDocentedetalleDto: CreateDocentedetalleDto) {
    return this.docentedetalleService.create(createDocentedetalleDto);
  }

  @Get('getall')
  findAll() {
    return this.docentedetalleService.findAll();
  }

  @Get('getby/:id')
  findOne(@Param('id') id: string) {
    return this.docentedetalleService.findOne(+id);
  }

  @Patch('updateby/:id')
  update(@Param('id') id: string, @Body() updateDocentedetalleDto: UpdateDocentedetalleDto) {
    return this.docentedetalleService.update(+id, updateDocentedetalleDto);
  }

  @Delete('deleteby/:id')
  remove(@Param('id') id: string) {
    return this.docentedetalleService.remove(+id);
  }
}
