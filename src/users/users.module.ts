import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
