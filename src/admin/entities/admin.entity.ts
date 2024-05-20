import { Admindetalle } from "src/admindetalle/entities/admindetalle.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admini {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombreCompleto: string;
  
    @Column()
    colegiatura: string;
  
    @Column({ nullable: true })
    firmaDigital: Buffer;

    @OneToMany(() => Admindetalle, admindetalle => admindetalle.admin)
    admindetalles: Admindetalle[];
}
