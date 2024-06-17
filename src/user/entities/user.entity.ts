import { Admini } from "src/admin/entities/admin.entity";
import { Docente } from "src/docente/entities/docente.entity";
import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Role } from "src/roles/entities/role.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 10, unique:true})
    codigo: string;

    @Column({ type: 'varchar', length: 255, unique:true })
    email: string;

    @Column({ type: 'varchar', length: 20 })
    password: string;

    @Column({ type: 'varchar', length: 50 })
    estado: string;

    @Column({ type: 'varchar', length: 25})
    rol: string;

    // Relación con Estudiante
  @OneToOne(() => Estudiante)
  @JoinColumn()
  estudiante: Estudiante;

  // Relación con Docente
  @OneToOne(() => Docente)
  @JoinColumn()
  docente: Docente;

  // Relación con Role
  @OneToOne(() => Role)
  @JoinColumn({ name: "rol", referencedColumnName: "nombre" })
  rolEntity: Role;

}
