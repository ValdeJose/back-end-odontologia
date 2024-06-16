import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleGuard } from './guards/google.guard';
import { Response } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('GoogleOath')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(GoogleGuard)
  @Get('oauth/google')
  async signinWithGoogle() {}

  @UseGuards(GoogleGuard)
  @Get('oauth/google/redirect')
  async googleOAuthredirect(@Req() req, @Res() res: Response) {
    this.authService.googleAuthRedirect(req.user, res);
  }
}
