import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async getUsers(companyId?: string): Promise<User[]> {
    if (companyId) {
      return this.userModel.findAll({ where: { companyId } });
    }
    return this.userModel.findAll();
  }

  async createUser(
    name: string,
    email: string,
    companyId?: string,
  ): Promise<User> {
    return this.userModel.create({ name, email, companyId });
  }
}
