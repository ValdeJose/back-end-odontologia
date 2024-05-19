import { Docente } from '../../docente/entities/docente.entity'; // Asegúrate de que la ruta sea correcta
import { Periodo } from '../../periodo/entities/periodo.entity'; // Asegúrate de que la ruta sea correcta
import { Sede } from '../../sede/entities/sede.entity'; // Asegúrate de que la ruta sea correcta
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Docentedetalle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  detalle: string;

  @ManyToOne(() => Docente, docente => docente.detalles)
  docente: Docente;

  @ManyToOne(() => Periodo, periodo => periodo.nombre, { nullable: true })
  periodo: Periodo;

  @ManyToOne(() => Sede, sede => sede.nombre, { nullable: true })
  sede: Sede;
}

