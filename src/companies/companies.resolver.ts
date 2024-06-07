import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CompaniesService } from './companies.service';
import { Company } from './entities/company.entity';

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(private companiesService: CompaniesService) {}

  @Query(() => [Company])
  async getCompanies(): Promise<Company[]> {
    return this.companiesService.getCompanies();
  }

  @Query(() => Company)
  async getCompany(@Args('id') id: string): Promise<Company> {
    return this.companiesService.getCompany(id);
  }

  @Mutation(() => Company)
  async createCompany(@Args('name') name: string): Promise<Company> {
    return this.companiesService.createCompany(name);
  }
}
