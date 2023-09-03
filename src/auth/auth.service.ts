import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credential-dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
// 사용자의 회원가입 및 로그인 기능을 담당하는 서비스 클래스
export class AuthService {
  // UserRepository와 JwtService를 주입
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  // 회원가입 로직을 수행하는 메서드입니다. 사용자 정보를 생성합니다.
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialsDto);
  }

  // 로그인 로직을 수행하는 메서드입니다.
  // 유효한 사용자라면 JWT 토큰을 반환하고, 그렇지 않다면 예외를 발생시킵니다.
  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto;
    const user = await this.userRepository.findOneBy({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { username };
      const accessToken = this.jwtService.sign(payload);

      return { accessToken };
    } else {
      throw new UnauthorizedException('logIn failed');
    }
  }
}
