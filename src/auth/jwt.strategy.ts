import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import * as config from 'config';

// Injectable 데코레이터를 사용하여 NestJS의 DI 시스템에 클래스를 등록합니다.
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  // UserRepository를 의존성 주입합니다.
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    // PassportStrategy를 상속받아 기본 설정을 초기화합니다.
    super({
      // JWT의 비밀 키를 설정 파일에서 가져옵니다.
      secretOrKey: config.get('jwt.secret'),
      // 요청 헤더에서 JWT 토큰을 추출합니다.
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  // JWT 토큰의 유효성을 검증하는 메서드입니다.
  async validate(payload) {
    // JWT 페이로드에서 사용자 이름을 추출합니다.
    const { username } = payload;
    // 사용자 이름으로 DB에서 사용자를 조회합니다.
    const user: User = await this.userRepository.findOneBy({ username });

    // 사용자가 존재하지 않으면 권한 없음 예외를 발생시킵니다.
    if (!user) {
      throw new UnauthorizedException();
    }

    // 사용자가 존재하면 사용자 정보를 반환합니다.
    return user;
  }
}
