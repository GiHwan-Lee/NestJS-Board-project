import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential-dto';

// 'auth' 경로에 대한 컨트롤러를 정의합니다.
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {} // auth 서비스 주입

  // 사용자 어플리케이션 가입
  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  // 인증된 사용자 로그인
  @Post('/signin')
  singIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
}
