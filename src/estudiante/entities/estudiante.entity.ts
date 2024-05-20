import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estudiante {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 75 })
    nombre: string;

    @Column({ type: 'varchar', length: 75 })
    apellido: string;

    @Column({ type: 'varchar', length: 10 })
    codigo: string;

    @Column({ type: 'varchar', length: 60 })
    email: string;

    @Column({ type: 'varchar', length: 1 })
    genero: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    foto: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    firmadigital: string;
}
