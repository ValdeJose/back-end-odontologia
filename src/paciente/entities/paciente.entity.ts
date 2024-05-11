import { Tratamiento } from "src/tratamiento/entities/tratamiento.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Paciente {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'date' })
    FechaCreacion: Date;
  
    @Column({ type: 'time' })
    HoraCreacion: string;
  
    @Column({ type: 'varchar', length: 50 })
    Nombre: string;
  
    @Column({ type: 'varchar', length: 50 })
    ApellidoPaterno: string;
  
    @Column({ type: 'varchar', length: 50 })
    ApellidoMaterno: string;
  
    @Column({ type: 'varchar', length: 10 })
    Sexo: string;
  
    @Column({ type: 'varchar', length: 100 })
    Lugar: string;
  
    @Column({ type: 'varchar', length: 100 })
    Domicilio: string;
  
    @Column({ type: 'date' })
    FechaNacimiento: Date;
  
    @Column({ type: 'varchar', length: 20 })
    EstadoCivil: string;
  
    @Column({ type: 'varchar', length: 15 })
    NroCelular: string;
  
    @Column({ type: 'varchar', length: 50 })
    Correo: string;
  
    @Column({ type: 'varchar', length: 50, nullable: true })
    Ocupacion: string;
  
    @Column({ type: 'varchar', length: 100, nullable: true })
    Responsable: string;
  
    @Column({ type: 'varchar', length: 100, nullable: true })
    DomicilioResponsable: string;
  
    @Column({ type: 'varchar', length: 15, nullable: true })
    CelularResponsable: string;
  
    @Column({ type: 'text', nullable: true })
    MotivoConsulta: string;
  
    @OneToMany(() => Tratamiento, tratamiento => tratamiento.paciente)
    tratamientos: Tratamiento[];
}
