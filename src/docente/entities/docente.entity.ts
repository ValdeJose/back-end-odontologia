import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Docente {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreCompleto: string;

  @Column()
  colegiatura: string;
}
