import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

// GetUser 데코레이터를 생성합니다.
// 이 데코레이터는 HTTP 요청에서 'user' 객체를 추출해 반환하는 역할을 합니다.
export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest(); // 현재 HTTP 요청을 가져옵니다.
    return req.user; // 요청 객체에서 'user'를 반환합니다.
  },
);
