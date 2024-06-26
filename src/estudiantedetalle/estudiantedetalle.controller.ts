import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstudiantedetalleService } from './estudiantedetalle.service';
import { CreateEstudiantedetalleDto } from './dto/create-estudiantedetalle.dto';
import { UpdateEstudiantedetalleDto } from './dto/update-estudiantedetalle.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('estudianteDetalle')
@ApiBearerAuth()
@Controller('ToothLinkAPI/estudiantedetalle')
export class EstudiantedetalleController {
  constructor(private readonly estudiantedetalleService: EstudiantedetalleService) {}

  @Post('create')
    @ApiCreatedResponse({description: 'Ingreso Exitoso'})
    @ApiForbiddenResponse({description: 'Ingreso Prohibido'})
  create(@Body() createEstudiantedetalleDto: CreateEstudiantedetalleDto) {
    return this.estudiantedetalleService.create(createEstudiantedetalleDto);
  }

  @Get('getall')
  findAll() {
    return this.estudiantedetalleService.findAll();
  }

  @Get('getby/:id')
  findOne(@Param('id') id: string) {
    return this.estudiantedetalleService.findOne(+id);
  }

  @Patch('updateby/:id')
  update(@Param('id') id: string, @Body() updateEstudiantedetalleDto: UpdateEstudiantedetalleDto) {
    return this.estudiantedetalleService.update(+id, updateEstudiantedetalleDto);
  }

  @Delete('deleteby/:id')
  remove(@Param('id') id: string) {
    return this.estudiantedetalleService.remove(+id);
  }
}
