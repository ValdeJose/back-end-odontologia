import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombreCompleto: string;
  
    @Column()
    colegiatura: string;
  
    @Column({ nullable: true })
    firmaDigital: Buffer;
}
