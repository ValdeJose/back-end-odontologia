import { User } from 'src/user/entities/user.entity';
import { Docente } from '../../docente/entities/docente.entity'; // Asegúrate de que la ruta sea correcta
import { Periodo } from '../../periodo/entities/periodo.entity'; // Asegúrate de que la ruta sea correcta
import { Sede } from '../../sede/entities/sede.entity'; // Asegúrate de que la ruta sea correcta
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Docentedetalle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  detalle: string;

  @ManyToOne(() => Periodo, periodo => periodo.nombre, { nullable: true })
  periodo: Periodo;

  @ManyToOne(() => Sede, sede => sede.nombre, { nullable: true })
  sede: Sede;

}

