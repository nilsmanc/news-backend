import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { User, UsersSchema } from './schemas/users.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
  ],
})
export class UsersModule {}
