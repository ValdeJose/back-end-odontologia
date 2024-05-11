import { generate } from "rxjs";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @Column({ type: 'varchar', length: 100 })
    apellido: string;

    @Column({ type: 'varchar', length: 20 })
    celular: string;

    @Column({ type: 'varchar', length: 255, unique:true })
    email: string;

    @Column({ type: 'varchar', length: 20 })
    password: string;

    @Column({ type: 'varchar', length: 20 })
    numDoc: string;

    @Column({ type: 'blob', nullable: true})
    foto: Buffer;

    @Column({ type: 'varchar', length: 50 })
    estado: string;

    @Column({ type: 'varchar', length: 10 })
    genero: string;

    @Column({ type: 'varchar', length: 20 })
    tipoDocumento: string;

    @Column({ type: 'varchar', length: 50, default: 'user' })
    rol: string;
}
