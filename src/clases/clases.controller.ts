import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClasesService } from './clases.service';
import { CreateClaseDto } from './dto/create-clase.dto';
import { UpdateClaseDto } from './dto/update-clase.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Clases')
@ApiBearerAuth()
@Controller('clases')
export class ClasesController {
  constructor(private readonly clasesService: ClasesService) {}

  @Post('create')
  create(@Body() createClaseDto: CreateClaseDto) {
    return this.clasesService.create(createClaseDto);
  }

  @Get('getall')
  findAll() {
    return this.clasesService.findAll();
  }

  @Get('getby/:id')
  findOne(@Param('id') id: string) {
    return this.clasesService.findOne(+id);
  }

  @Patch('updateby:id')
  update(@Param('id') id: string, @Body() updateClaseDto: UpdateClaseDto) {
    return this.clasesService.update(+id, updateClaseDto);
  }

  @Delete('deleteby:id')
  remove(@Param('id') id: string) {
    return this.clasesService.remove(+id);
  }
}
