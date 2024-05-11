import { PartialType } from '@nestjs/mapped-types';
import { CreateDocentedetalleDto } from './create-docentedetalle.dto';

export class UpdateDocentedetalleDto extends PartialType(CreateDocentedetalleDto) {}
