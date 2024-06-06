import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeriodoService } from './periodo.service';
import { CreatePeriodoDto } from './dto/create-periodo.dto';
import { UpdatePeriodoDto } from './dto/update-periodo.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Periodo')
@ApiBearerAuth()
@Controller('periodo')
export class PeriodoController {
  constructor(private readonly periodoService: PeriodoService) {}

  @Post('create')
  @ApiCreatedResponse({description: 'Ingreso Exitoso'})
  @ApiForbiddenResponse({description: 'Ingreso Prohibido'})
  create(@Body() createPeriodoDto: CreatePeriodoDto) {
    return this.periodoService.create(createPeriodoDto);
  }

  @Get('getall')
  findAll() {
    return this.periodoService.findAll();
  }

  @Get('getby/:id')
  findOne(@Param('id') id: string) {
    return this.periodoService.findOne(+id);
  }

  @Patch('updateby/:id')
  update(@Param('id') id: string, @Body() updatePeriodoDto: UpdatePeriodoDto) {
    return this.periodoService.update(+id, updatePeriodoDto);
  }

  @Delete('deleteby/:id')
  remove(@Param('id') id: string) {
    return this.periodoService.remove(+id);
  }
}
