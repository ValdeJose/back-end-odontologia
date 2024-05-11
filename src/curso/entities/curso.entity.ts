import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Curso {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nrc: string;

  @Column()
  nombreCurso: string;

  @Column()
  creditoCurso: number;

  @Column()
  descripcionCurso: string;
}
