import { Docentedetalle } from "src/docentedetalle/entities/docentedetalle.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Docente {
    @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 85 })
    nombre: string;

    @Column({ type: 'varchar', length: 85 })
    apellido: string;

    @Column({ type: 'varchar', length: 10 })
    codigo: string;

    @Column({ type: 'varchar', length: 255})
    email: string;

    @Column({ type: 'varchar', length: 12})
    phone: string;

    @Column({ type: 'varchar', length: 1 })
    genero: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    foto: string;

    @Column({ type: 'varchar', length: 30 })
    colegiatura: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    firmadigital: string;

    @OneToMany(() => Docentedetalle, docentedetalle => docentedetalle.docente)
    detalles: Docentedetalle[];

    @OneToOne(() => User, user => user.docente)
    user: User;

}
