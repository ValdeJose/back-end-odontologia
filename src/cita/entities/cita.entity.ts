import { Paciente } from "src/paciente/entities/paciente.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cita {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    fecha: Date;
  
    @Column()
    hora: string;
  
    @Column()
    odontologo: string;
  
    @Column()
    motivo: string;
  
    @Column()
    sede: string;
  
    @Column({ nullable: true })
    extras: string;
  
    @ManyToOne(() => Paciente, paciente => paciente.id)
    paciente: Paciente;
  
    @ManyToOne(() => User, usuario => usuario.id)
    usuario: User;
}
