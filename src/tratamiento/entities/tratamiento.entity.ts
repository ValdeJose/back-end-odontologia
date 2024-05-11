import { Paciente } from "src/paciente/entities/paciente.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Tratamiento {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    detalle: string;
  
    @ManyToOne(() => Paciente, paciente => paciente.tratamientos)
    paciente: Paciente;
}
