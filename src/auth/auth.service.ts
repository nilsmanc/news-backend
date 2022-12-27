import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from '../users/schemas/users.schemas';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string): Promise<User | null> {
    const user = await this.usersService.findOne(username);

    if (!user) {
      return null;
    }

    return user;
  }

  async generateAccessToken(user: User) {
    const access_token = this.jwtService.sign({ user });
    return access_token;
  }

  verifyToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      return { error: error.message };
    }
  }
  parseJwt(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      Buffer.from(base64, 'base64')
        .toString('ascii')
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );

    return JSON.parse(jsonPayload);
  }

  async getUserByTokenData(token: string): Promise<User> {
    const parsedTokenData = this.parseJwt(token);

    return await this.usersService.findOne(parsedTokenData.user.username);
  }
}
