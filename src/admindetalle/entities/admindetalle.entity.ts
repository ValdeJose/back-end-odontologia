import { User } from '../../user/entities/user.entity'; 
import { Admini } from '../../admin/entities/admin.entity'; 
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admindetalle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    detalle: string;

    @ManyToOne(() => User, user => user.admindetalles)
    user: User;

    @ManyToOne(() => Admini, admin => admin.admindetalles)
    admin: Admini;
}

