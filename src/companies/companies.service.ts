import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Company } from './entities/company.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company)
    private companyModel: typeof Company,
  ) {}

  async getCompanies(): Promise<Company[]> {
    return this.companyModel.findAll({ include: [User] });
  }

  async getCompany(id: string): Promise<Company> {
    return this.companyModel.findByPk(id, { include: [User] });
  }

  async createCompany(name: string): Promise<Company> {
    return this.companyModel.create({ name });
  }
}
