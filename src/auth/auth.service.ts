import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credential-dto';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    const { username, password } = authCredentialsDto;
    const user = await this.userRepository.findOneBy({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      return 'logIn success';
    } else {
      throw new UnauthorizedException('logIn failed');
    }
  }
}
