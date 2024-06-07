import { DynamicModule as DynamicNestModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({})
export class DynamicModule {
  static register(entities: any[]): DynamicNestModule {
    return {
      module: DynamicModule,
      imports: [SequelizeModule.forFeature(entities)],
      exports: [SequelizeModule],
    };
  }
}
