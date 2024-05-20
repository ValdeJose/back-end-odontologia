import { Admindetalle } from "src/admindetalle/entities/admindetalle.entity";
import { Docentedetalle } from "src/docentedetalle/entities/docentedetalle.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({ type: 'varchar', length: 20 })
    tipoDocumento: string;

    @Column({ type: 'varchar', length: 20, unique:true })
    numDoc: string;

    @Column({ type: 'varchar', length: 50 })
    estado: string;

    @Column({ type: 'varchar', length: 50, default: 'user' })
    rol: string;

    @OneToMany(() => Docentedetalle, docentedetalle => docentedetalle.user)
    docentedetalles: Docentedetalle[];

    @OneToMany(() => Admindetalle, admindetalle => admindetalle.user)
    admindetalles: Admindetalle[];

}
