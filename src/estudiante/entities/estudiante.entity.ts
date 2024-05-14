import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estudiante {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 15 })
    nombre: string;

    @Column({ type: 'varchar', length: 15 })
    apellido: string;

    @Column({ type: 'varchar', length: 10 })
    codigo: string;

    @Column({ type: 'varchar', length: 15 })
    email: string;

    @Column({ type: 'varchar', length: 1 })
    genero: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    foto: string;

    @Column({ type: 'varchar', length: 1 })
    firmadigital: string;

}
