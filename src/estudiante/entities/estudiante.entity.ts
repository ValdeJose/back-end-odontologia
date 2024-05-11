import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estudiante {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombreCompleto: string;
}
