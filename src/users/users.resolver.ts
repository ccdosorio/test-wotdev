import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  async getUsers(
    @Args('companyId', { nullable: true }) companyId?: string,
  ): Promise<User[]> {
    return this.usersService.getUsers(companyId);
  }

  @Mutation(() => User)
  async createUser(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('companyId', { nullable: true }) companyId?: string,
  ): Promise<User> {
    return this.usersService.createUser(name, email, companyId);
  }
}
