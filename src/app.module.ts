import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { CompaniesModule } from './companies/companies.module';
import { Company } from './companies/entities/company.entity';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { DynamicModule } from './dynamic/dynamic.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User, Company],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    CompaniesModule,
    DynamicModule.register([User, Company]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
