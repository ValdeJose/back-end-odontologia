import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 15, unique: true })
    nombre: string;

    @Column({ type: 'varchar', length: 150 })
    descripcion: string;

    @OneToOne(() => User, (user) => user.rolEntity)
    user: User;
}
