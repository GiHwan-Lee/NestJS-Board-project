import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

// 사용자 인증 정보를 위한 DTO
export class AuthCredentialsDto {
  // 사용자 이름은 문자열이며, 최소 4자 최대 20자여야 합니다.
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  // 비밀번호는 문자열이며, 최소 4자 최대 20자여야 합니다.
  // 추가로, 비밀번호는 영문자와 숫자만 허용됩니다.
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts English and number',
  })
  password: string;
}
