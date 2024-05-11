import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudiantedetalleDto } from './create-estudiantedetalle.dto';

export class UpdateEstudiantedetalleDto extends PartialType(CreateEstudiantedetalleDto) {}
