import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Get, Param, Req } from '@nestjs/common/decorators';
import { Response } from 'express';
import { User } from 'src/users/schemas/users.schemas';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LoginGuard } from './guards/login.guard';
import { RegistrationGuard } from './guards/registration.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @UseGuards(LoginGuard)
  @Post('login')
  async loginUser(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    const user = await this.usersService.login(loginUserDto);

    const access = await this.authService.generateAccessToken(user);

    res.statusCode = HttpStatus.OK;

    return res.send(access);
  }

  @UseGuards(RegistrationGuard)
  @Post('registration')
  async registrationUser(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
  ) {
    await this.usersService.registration(createUserDto);

    res.statusCode = HttpStatus.CREATED;

    return res.send('User created');
  }

  @Get('me')
  async getMe(@Req() req): Promise<User> {
    const user = await this.authService.getUserByTokenData(
      req.headers.authorization,
    );
    console.log(req.headers.authorization);
    return user;
  }
}
