import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { UsersRepository } from 'src/shared/database/repositories/user.repositories';
import { SigninDto } from './dto/signin';
import { SignupDto } from './dto/signup';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepo: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signin(signinDto: SigninDto) {
    const { username, password } = signinDto;

    const user = await this.usersRepo.findUnique({
      where: { username },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password.');
    }

    const accessToken = await this.generateAccessToken(user.id);

    return { accessToken };
  }

  async signup(signupDto: SignupDto) {
    const { name, username, password } = signupDto;

    const emailTaken = await this.usersRepo.findUnique({
      where: { username },
      select: { id: true },
    });

    if (emailTaken) {
      throw new ConflictException('This e-mail is already in use.');
    }

    const hashedPassword = await hash(password, 6);

    const user = await this.usersRepo.create({
      data: {
        name,
        username,
        password: hashedPassword,
      },
    });

    const accessToken = await this.generateAccessToken(user.id);

    return { accessToken };
  }

  private generateAccessToken(userId: string) {
    return this.jwtService.signAsync({ sub: userId });
  }
}
