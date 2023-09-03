import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { AuthCredentialsDto } from './dto/auth-credential-dto';

// Injectable 데코레이터를 사용하여 NestJS의 의존성 주입 시스템에 UserRepository를 등록합니다.
@Injectable()
export class UserRepository extends Repository<User> {
  // UserRepository의 생성자입니다. DataSource를 주입받습니다.
  constructor(private dataSource: DataSource) {
    // 상위 클래스인 Repository의 생성자를 호출하며, User 엔티티와 DataSource의 EntityManager를 전달합니다.
    super(User, dataSource.createEntityManager());
  }

  // 사용자 생성 메서드입니다. 비밀번호는 bcrypt로 해시되어 저장됩니다.
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    // 비밀번호 해싱을 위한 salt를 생성합니다.
    const salt = await bcrypt.genSalt();
    // 주어진 salt를 사용하여 비밀번호를 해시합니다.
    const hashedPassword = await bcrypt.hash(password, salt);

    // 새로운 User 객체를 생성합니다.
    const user = this.create({ username, password: hashedPassword });

    try {
      // 생성된 사용자 객체를 저장합니다.
      await this.save(user);
    } catch (error) {
      // 에러 처리
      // '23505'는 유니크 제약 조건 위반을 나타냅니다. 이미 존재하는 사용자명의 경우 이 에러가 발생할 수 있습니다.
      if (error.code === '23505') {
        throw new ConflictException('Existing username');
      } else {
        // 그 외의 에러는 내부 서버 에러로 간주하고 처리합니다.
        throw new InternalServerErrorException();
      }
    }
  }
}
