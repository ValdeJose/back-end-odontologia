import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { subscribe } from 'diagnostics_channel';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async login({email, password}:LoginDto){
        const user = await this.userService.findOnebyEmail(email)
        if (!user) {
            throw new UnauthorizedException('correo no valido')
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('password incorrecta')
        }

        const payLoad = {email: user.email};

        const token = await this.jwtService.signAsync(payLoad)

        return {
            token,
            email,
        };
    }
}
