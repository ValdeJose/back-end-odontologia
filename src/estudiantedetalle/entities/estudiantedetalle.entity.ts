import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from "../../estudiante/entities/estudiante.entity";
import { Curso } from "../../curso/entities/curso.entity";
import { Periodo } from "../../periodo/entities/periodo.entity";
import { User } from "../../user/entities/user.entity";
import { Paciente } from "src/paciente/entities/paciente.entity";

@Entity()
export class Estudiantedetalle {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Estudiante, estudiante => estudiante.codigo)
    estudiante: Estudiante;

    @ManyToOne(() => Curso, curso => curso.nombreCurso)
    curso: Curso;

    @ManyToOne(() => Periodo, periodo => periodo.nombre)
    periodo: Periodo;

    @OneToOne(() => User, user => user.rol)
    user: User;

    @ManyToOne(() => Paciente, paciente => paciente.id)
    paciente: Paciente;
}

