import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Test} from '../models';
import {TestRepositoryRepository} from '../repositories';

export class TestController {
  constructor(
    @repository(TestRepositoryRepository)
    public testRepositoryRepository : TestRepositoryRepository,
  ) {}

  @post('/tests', {
    responses: {
      '200': {
        description: 'Test model instance',
        content: {'application/json': {schema: getModelSchemaRef(Test)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Test, {
            title: 'NewTest',
            exclude: ['id'],
          }),
        },
      },
    })
    test: Omit<Test, 'id'>,
  ): Promise<Test> {
    return this.testRepositoryRepository.create(test);
  }

  @get('/tests/count', {
    responses: {
      '200': {
        description: 'Test model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Test)) where?: Where<Test>,
  ): Promise<Count> {
    return this.testRepositoryRepository.count(where);
  }

  @get('/tests', {
    responses: {
      '200': {
        description: 'Array of Test model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Test)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Test)) filter?: Filter<Test>,
  ): Promise<Test[]> {
    return this.testRepositoryRepository.find(filter);
  }

  @patch('/tests', {
    responses: {
      '200': {
        description: 'Test PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Test, {partial: true}),
        },
      },
    })
    test: Test,
    @param.query.object('where', getWhereSchemaFor(Test)) where?: Where<Test>,
  ): Promise<Count> {
    return this.testRepositoryRepository.updateAll(test, where);
  }

  @get('/tests/{id}', {
    responses: {
      '200': {
        description: 'Test model instance',
        content: {'application/json': {schema: getModelSchemaRef(Test)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Test> {
    return this.testRepositoryRepository.findById(id);
  }

  @patch('/tests/{id}', {
    responses: {
      '204': {
        description: 'Test PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Test, {partial: true}),
        },
      },
    })
    test: Test,
  ): Promise<void> {
    await this.testRepositoryRepository.updateById(id, test);
  }

  @put('/tests/{id}', {
    responses: {
      '204': {
        description: 'Test PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() test: Test,
  ): Promise<void> {
    await this.testRepositoryRepository.replaceById(id, test);
  }

  @del('/tests/{id}', {
    responses: {
      '204': {
        description: 'Test DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.testRepositoryRepository.deleteById(id);
  }
}
