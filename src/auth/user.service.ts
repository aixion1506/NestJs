import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    console.log('createUser-service');

    return this.userRepository.createUser(authCredentialsDto);
  }

  // 전체 유저 조회
  async getAllUser(): Promise<User[]> {
    return this.userRepository.find({ order: { id: 'ASC' } });
  }
}
