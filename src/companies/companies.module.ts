import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { CompaniesResolver } from './companies.resolver';
import { CompaniesService } from './companies.service';
import { Company } from './entities/company.entity';

@Module({
  imports: [SequelizeModule.forFeature([Company])],
  providers: [CompaniesResolver, CompaniesService],
  exports: [CompaniesService],
})
export class CompaniesModule {}
