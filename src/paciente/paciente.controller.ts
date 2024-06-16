import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Paciente')
@ApiBearerAuth()
@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post('create')
  @ApiCreatedResponse({description: 'Ingreso Exitoso'})
  @ApiForbiddenResponse({description: 'Ingreso Prohibido'})
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  @Get('getall')
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get('getby/:id')
  findOne(@Param('id') id: string) {
    return this.pacienteService.findOne(+id);
  }

  @Patch('updateby/:id')
  update(@Param('id') id: string, @Body() updatePacienteDto: UpdatePacienteDto) {
    return this.pacienteService.update(+id, updatePacienteDto);
  }

  @Delete('deleteby/:id')
  remove(@Param('id') id: string) {
    return this.pacienteService.remove(+id);
  }

  @Get('report')
  async getReport(@Res() res: Response) {
    const buffer = await this.pacienteService.generateReport();
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=pacientes_report.xlsx');
    res.end(buffer);
  }
}
