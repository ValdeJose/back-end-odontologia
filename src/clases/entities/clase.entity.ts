import { Curso } from "src/curso/entities/curso.entity";
import { Docente } from "src/docente/entities/docente.entity";
import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clase {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  horario: string;

  @Column()
  aula: string;

  @ManyToOne(() => Docente, docente => docente.id)
  docente: Docente;

  @ManyToOne(() => Estudiante, estudiante => estudiante.id)
  estudiante: Estudiante;

  @ManyToOne(() => Curso, curso => curso.id)
  curso: Curso;
}
