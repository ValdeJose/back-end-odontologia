import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TratamientoService } from './tratamiento.service';
import { CreateTratamientoDto } from './dto/create-tratamiento.dto';
import { UpdateTratamientoDto } from './dto/update-tratamiento.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tratamiento')
@ApiBearerAuth()
@Controller('tratamiento')
export class TratamientoController {
  constructor(private readonly tratamientoService: TratamientoService) {}

  @Post('create')
  @ApiCreatedResponse({description: 'Ingreso Exitoso'})
  @ApiForbiddenResponse({description: 'Ingreso Prohibido'})
  create(@Body() createTratamientoDto: CreateTratamientoDto) {
    return this.tratamientoService.create(createTratamientoDto);
  }

  @Get('getall')
  findAll() {
    return this.tratamientoService.findAll();
  }

  @Get('getby/:id')
  findOne(@Param('id') id: string) {
    return this.tratamientoService.findOne(+id);
  }

  @Patch('updateby/:id')
  update(@Param('id') id: string, @Body() updateTratamientoDto: UpdateTratamientoDto) {
    return this.tratamientoService.update(+id, updateTratamientoDto);
  }

  @Delete('deleteby/:id')
  remove(@Param('id') id: string) {
    return this.tratamientoService.remove(+id);
  }
}
