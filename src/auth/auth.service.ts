import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    // TODO: need to validate against password field
    // if (user && user.password === password) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    if (user) {
      return user;
    }
    return null;
  }
}
