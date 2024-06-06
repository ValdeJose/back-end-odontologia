import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from "../../estudiante/entities/estudiante.entity";
import { Curso } from "../../curso/entities/curso.entity";
import { Periodo } from "../../periodo/entities/periodo.entity";
import { Paciente } from "src/paciente/entities/paciente.entity";

@Entity()
export class Estudiantedetalle {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => Estudiante, estudiante => estudiante.id)
    estudiante: Estudiante;

    @ManyToOne(() => Curso, curso => curso.nombreCurso)
    curso: Curso;

    @ManyToOne(() => Periodo, periodo => periodo.nombre)
    periodo: Periodo;

    @Column({ type: 'int', default: 0 })
    totalPacientesRegistrados: number;

    @Column({ type: 'int', default: 0 })
    citasRegistradas: number;

    @Column({ type: 'int', default: 0 })
    citasCanceladas: number;

    @Column({ type: 'int', default: 0 })
    citasAtendidas: number;
}

