import { createTestServerWithSession } from '../../../../testHelpers/initTestServer';
import { seedUsers } from '../../../seeds/1-user-seed';
import assert from 'assert';

import request from 'supertest';

const PATH = '/api/v1/users/logout';

describe(`Logout [GET] ${PATH}`, async function () {
  let userID;
  let demoUserID;

  beforeEach(async () => {
    [userID, demoUserID] = await seedUsers();
  });

  it('Should get status 200 demo user', async function () {
    const response: any = await request(
      createTestServerWithSession(demoUserID)
    ).get(PATH);

    const { status } = response;

    assert.equal(status, 200);
  });

  it('Should get status 200', async function () {
    const response: any = await request(
      createTestServerWithSession(userID)
    ).get(PATH);

    const { status } = response;

    assert.equal(status, 200);
  });
});
