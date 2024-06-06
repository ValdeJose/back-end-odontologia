import { Admini } from "src/admin/entities/admin.entity";
import { Docente } from "src/docente/entities/docente.entity";
import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 15 })
    username: string;

    @Column({ type: 'varchar', length: 255, unique:true })
    email: string;

    @Column({ type: 'varchar', length: 20 })
    password: string;

    @Column({ type: 'varchar', length: 50 })
    estado: string;

    @Column({ type: 'varchar', length: 25})
    rol: string;

    @OneToOne(() => Estudiante, estudiante => estudiante.user, { nullable: true })
    estudiante: Estudiante;

    @OneToOne(() => Docente, docente => docente.user, { nullable: true })
    docente: Docente;

    @OneToOne(() => Admini, admin => admin.user, { nullable: true })
    admin: Admini;

}
