import { PartialType } from '@nestjs/swagger';
import { CreateAdmindetalleDto } from './create-admindetalle.dto';

export class UpdateAdmindetalleDto extends PartialType(CreateAdmindetalleDto) {}
