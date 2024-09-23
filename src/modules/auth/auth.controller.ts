import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin';
import { SignupDto } from './dto/signup';
import { IsPublic } from 'src/shared/decorators/IsPublic';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@IsPublic()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @ApiOperation({ summary: 'Sign in' })
  @ApiResponse({ status: 200, description: 'Sign in successfully.' })
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }

  @Post('signup')
  @ApiOperation({ summary: 'Sign up' })
  @ApiResponse({ status: 201, description: 'Sign up successfully.' })
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
