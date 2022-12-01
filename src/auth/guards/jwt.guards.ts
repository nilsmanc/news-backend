import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable()
export class JWTGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  async canActivate(
    context: ExecutionContext,
    //@ts-ignore
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = request.headers.authorization.split(' ')[1];
    console.log(request.headers.authorization);

    if (!token) {
      throw new UnauthorizedException('Ошибка авторизации');
    }

    const validToken = this.authService.verifyToken(token);

    if (validToken?.error) {
      throw new UnauthorizedException(validToken.error);
    }
    return (request.token = token);
  }
}
