import { Admindetalle } from "src/admindetalle/entities/admindetalle.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admini {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 85 })
    nombre: string;

    @Column({ type: 'varchar', length: 85 })
    apellido: string;
  
    @Column({ type: 'varchar', length: 30 })
    colegiatura: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true })
    firmadigital: string;

    @OneToOne(() => User, user => user.admin)
    user: User;

    @OneToMany(() => Admindetalle, admindetalle => admindetalle.admin)
    admindetalles: Admindetalle[];
}
