import { Field, ObjectType } from '@nestjs/graphql';

import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  Default,
  DataType,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

import { Company } from './../../companies/entities/company.entity';

@ObjectType()
@Table
export class User extends Model<User> {
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

  @Column
  @Field()
  email: string;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.UUID,
  })
  @Field(() => String)
  companyId: string;

  @BelongsTo(() => Company)
  @Field(() => Company)
  company: Company;
}
