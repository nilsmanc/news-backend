import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  async canActivate(
    context: ExecutionContext,
    //@ts-ignore
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const { username, password } = request.body;
    const user = await this.authService.validateUser(username);

    if (!user) {
      throw new UnauthorizedException('Failed to authorize');
    }

    if (user.password !== password) {
      throw new UnauthorizedException('Failed to authorize');
    }

    return true;
  }
}
