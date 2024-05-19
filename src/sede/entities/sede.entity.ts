import { Docentedetalle } from "src/docentedetalle/entities/docentedetalle.entity";
import { Periodo } from "src/periodo/entities/periodo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sede {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  celular: string;

  @Column()
  correo: string;

  @OneToMany(() => Periodo, periodo => periodo.sede)
  periodos: Periodo[];

  @OneToMany(() => Docentedetalle, docentedetalle => docentedetalle.periodo)
  docentedetalles: Docentedetalle[];
}
