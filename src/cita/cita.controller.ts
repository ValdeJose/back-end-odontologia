import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('cita')
@ApiBearerAuth()
@Controller('ToothLinkAPI/cita')
export class CitaController {
  constructor(private readonly citaService: CitaService) {}

  @Post('create')
  @ApiCreatedResponse({description: 'The recorded has been successfully created.'})
  @ApiForbiddenResponse({description: 'Forbidden.'})
  create(@Body() createCitaDto: CreateCitaDto) {
    return this.citaService.create(createCitaDto);
  }

  @Get('getall')
  findAll() {
    return this.citaService.findAll();
  }

  @Get('getby/:id')
  findOne(@Param('id') id: string) {
    return this.citaService.findOne(+id);
  }

  @Patch('updateby/:id')
  update(@Param('id') id: string, @Body() updateCitaDto: UpdateCitaDto) {
    return this.citaService.update(+id, updateCitaDto);
  }

  @Delete('deleteby/:id')
  remove(@Param('id') id: string) {
    return this.citaService.remove(+id);
  }
}
