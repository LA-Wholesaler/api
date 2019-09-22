import {Client, expect} from '@loopback/testlab';
import {ApiApplication} from '../..';
import {setupApplication} from './test-helper';

describe('HelloController', () => {
  let app: ApiApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /hello', async () => {
    const res = await client.get('/hello').expect(200);
    expect(res.body.data).to.equal('hello world');
  });
});
