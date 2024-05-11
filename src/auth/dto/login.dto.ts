import { Transform } from "class-transformer";
import { MinLength, IsEmail, IsString } from "class-validator";

export class LoginDto {
    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(8, { message: "La longitud mínima de la contraseña es de 8 caracteres" }) // Ajuste aquí
    password: string;
}
