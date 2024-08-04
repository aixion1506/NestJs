import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './user.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signup(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
  ): Promise<void> {
    console.log('createUser-controller');
    return this.authService.signUp(authCredentialsDto);
  }

  @Get('/')
  getAllUser(): Promise<User[]> {
    return this.authService.getAllUser();
  }
}
