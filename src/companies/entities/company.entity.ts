import { Field, ObjectType } from '@nestjs/graphql';

import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  Default,
  DataType,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

import { User } from './../../users/entities/user.entity';

@ObjectType()
@Table
export class Company extends Model<Company> {
  @PrimaryKey
  @Default(uuidv4)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  @Field(() => String)
  id: string;

  @Column
  @Field()
  name: string;

  @HasMany(() => User)
  @Field(() => [User], { nullable: true })
  users: User[];
}
