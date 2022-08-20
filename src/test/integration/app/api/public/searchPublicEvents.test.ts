// eslint-disable-next-line @typescript-eslint/no-var-requires
const assert = require('assert');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const request = require('supertest');

import { createTestServer } from '../../../../testHelpers/initTestServer';
import { invalidUUID } from '../../../../testHelpers/common';
import { seedSharedCalendar } from '../../../seeds/10-sharedCalendar';
import { seedUsers } from '../../../seeds/1-user-seed';

const PATH = (id: string) =>
  `/api/v1/public/calendars/${id}/search?summary=test`;

describe(`Search public events [GET] ${PATH}`, async function () {
  let sharedLinkID;
  let sharedLinkDisabledID;
  let sharedLinkExpiredID;
  beforeEach(async () => {
    const [userID] = await seedUsers();
    const { sharedLink, sharedLinkExpired, sharedLinkDisabled } =
      await seedSharedCalendar(userID);

    sharedLinkID = sharedLink.id;
    sharedLinkDisabledID = sharedLinkDisabled.id;
    sharedLinkExpiredID = sharedLinkExpired.id;
  });

  it('Should get status 404 wrong id', async function () {
    const response: any = await request(createTestServer()).get(
      PATH(invalidUUID)
    );

    const { status } = response;

    assert.equal(status, 404);
  });

  it('Should get status 404 expired', async function () {
    const response: any = await request(createTestServer()).get(
      PATH(sharedLinkExpiredID)
    );

    const { status } = response;

    assert.equal(status, 404);
  });

  it('Should get status 404 disabled', async function () {
    const response: any = await request(createTestServer()).get(
      PATH(sharedLinkDisabledID)
    );

    const { status } = response;

    assert.equal(status, 404);
  });

  it('Should get status 200', async function () {
    const response: any = await request(createTestServer()).get(
      PATH(sharedLinkID)
    );

    const { status } = response;

    assert.equal(status, 200);
  });
});
