import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SedeService } from './sede.service';
import { CreateSedeDto } from './dto/create-sede.dto';
import { UpdateSedeDto } from './dto/update-sede.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Sede')
@ApiBearerAuth()
@Controller('sede')
export class SedeController {
  constructor(private readonly sedeService: SedeService) {}

  @Post('create')
  @ApiCreatedResponse({description: 'Ingreso Exitoso'})
  @ApiForbiddenResponse({description: 'Ingreso Prohibido'})
  create(@Body() createSedeDto: CreateSedeDto) {
    return this.sedeService.create(createSedeDto);
  }

  @Get('getall')
  findAll() {
    return this.sedeService.findAll();
  }

  @Get('getby/:id')
  findOne(@Param('id') id: string) {
    return this.sedeService.findOne(+id);
  }

  @Patch('updateby/:id')
  update(@Param('id') id: string, @Body() updateSedeDto: UpdateSedeDto) {
    return this.sedeService.update(+id, updateSedeDto);
  }

  @Delete('deleteby/:id')
  remove(@Param('id') id: string) {
    return this.sedeService.remove(+id);
  }
}
