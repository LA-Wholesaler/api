import {
  Request,
  RestBindings,
  get,
  ResponseObject,
  api,
  param,
} from '@loopback/rest';
import {inject} from '@loopback/context';

/**
 * OpenAPI response for ping()
 */
const HELLO_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          data: {
            type: 'string',
          },
        },
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
@api({
  basePath: '/hello',
  paths: {},
})
export class HelloController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  // Map to `GET /ping`
  @get('/', {
    responses: {
      '200': HELLO_RESPONSE,
    },
  })
  ping(@param.query.string('name') name: string): object {
    // Reply with a greeting, the current time, the url, and request headers
    return {
      data: `hello ${name}`,
    };
  }
}
