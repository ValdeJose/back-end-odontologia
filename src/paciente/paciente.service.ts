import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PacienteService {

  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}

  async create(createPacienteDto: CreatePacienteDto) {
    return this.pacienteRepository.save(createPacienteDto);
  }

  findAll() {
    return this.pacienteRepository.find();
  }

  findOne(id: number) {
    return this.pacienteRepository.findOneBy({id});
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return this.pacienteRepository.update(id, updatePacienteDto);
  }

  remove(id: number) {
    return this.pacienteRepository.delete(id);
  }

  async generateReport(): Promise<Buffer> {
    const pacientes = await this.pacienteRepository.find({ relations: ['tratamientos'] });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Pacientes Report');

    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Nombre', key: 'Nombre', width: 30 },
      { header: 'Apellido Paterno', key: 'ApellidoPaterno', width: 30 },
      { header: 'Apellido Materno', key: 'ApellidoMaterno', width: 30 },
      { header: 'Fecha de Nacimiento', key: 'FechaNacimiento', width: 20 },
      { header: 'Sexo', key: 'Sexo', width: 10 },
      { header: 'Correo', key: 'Correo', width: 30 },
      { header: 'Motivo Consulta', key: 'MotivoConsulta', width: 50 },
      // Add more columns as needed
    ];

    pacientes.forEach(paciente => {
      worksheet.addRow({
        id: paciente.id,
        Nombre: paciente.Nombre,
        ApellidoPaterno: paciente.ApellidoPaterno,
        ApellidoMaterno: paciente.ApellidoMaterno,
        FechaNacimiento: paciente.FechaNacimiento,
        Sexo: paciente.Sexo,
        Correo: paciente.Correo,
        MotivoConsulta: paciente.MotivoConsulta,
        // Add more fields as needed
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
  }

}
