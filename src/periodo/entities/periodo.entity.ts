import { Docentedetalle } from "src/docentedetalle/entities/docentedetalle.entity";
import { Sede } from "src/sede/entities/sede.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Periodo {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    inicio: Date;
  
    @Column()
    fin: Date;
  
    @ManyToOne(() => Sede, sede => sede.periodos)
    sede: Sede;

    @OneToMany(() => Docentedetalle, docentedetalle => docentedetalle.periodo)
    docentedetalles: Docentedetalle[];
}
