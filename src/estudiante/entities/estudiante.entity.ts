import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estudiante {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 85 })
    nombre: string;

    @Column({ type: 'varchar', length: 85 })
    apellido: string;

    @Column({ type: 'varchar', length: 10 })
    codigo: string;

    @Column({ type: 'varchar', length: 255, unique:true })
    email: string;

    @Column({ type: 'varchar', length: 12})
    phone: string;

    @Column({ type: 'varchar', length: 1 })
    genero: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    foto: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    firmadigital: string;

    @OneToOne(() => User, user => user.estudiante)
    user: User;
}
