import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { SedeModule } from './sede/sede.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { CitaModule } from './cita/cita.module';
import { TratamientoModule } from './tratamiento/tratamiento.module';
import { DocenteModule } from './docente/docente.module';
import { PacienteModule } from './paciente/paciente.module';
import { AdminModule } from './admin/admin.module';
import { ClasesModule } from './clases/clases.module';
import { PeriodoModule } from './periodo/periodo.module';
import { EstudiantedetalleModule } from './estudiantedetalle/estudiantedetalle.module';
import { DocentedetalleModule } from './docentedetalle/docentedetalle.module';
import { CursoModule } from './curso/curso.module';
import { Admin } from 'typeorm';
import { Cita } from './cita/entities/cita.entity';
import { Clase } from './clases/entities/clase.entity';
import { Curso } from './curso/entities/curso.entity';
import { Docente } from './docente/entities/docente.entity';
import { Docentedetalle } from './docentedetalle/entities/docentedetalle.entity';
import { Estudiante } from './estudiante/entities/estudiante.entity';
import { Estudiantedetalle } from './estudiantedetalle/entities/estudiantedetalle.entity';
import { Paciente } from './paciente/entities/paciente.entity';
import { Periodo } from './periodo/entities/periodo.entity';
import { Sede } from './sede/entities/sede.entity';
import { Tratamiento } from './tratamiento/entities/tratamiento.entity';
import { AuthModule } from './auth/auth.module';
import { AdmindetalleModule } from './admindetalle/admindetalle.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: "",
      database: 'odontologia',
        entities: [User,Admin, Cita,Clase, Curso, Docente, Docentedetalle, Estudiante, Estudiantedetalle, Paciente, Periodo, Sede, Tratamiento],
        synchronize: true
    }),
    UserModule,
    SedeModule,
    EstudianteModule,
    CitaModule,
    TratamientoModule,
    DocenteModule,
    PacienteModule,
    AdminModule,
    ClasesModule,
    PeriodoModule,
    EstudiantedetalleModule,
    DocentedetalleModule,
    CursoModule,
    AuthModule,
    AdmindetalleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
