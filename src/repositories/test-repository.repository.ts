import {DefaultCrudRepository} from '@loopback/repository';
import {Test, TestRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TestRepositoryRepository extends DefaultCrudRepository<
  Test,
  typeof Test.prototype.id,
  TestRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Test, dataSource);
  }
}
