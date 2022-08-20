import { DAVAccount, DAVCalendar } from 'tsdav';
import { ImportMock } from 'ts-mock-imports';
import { testIcalString } from '../integration/seeds/4-calDavEvents';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsdav = require('tsdav');

export const mockTsDav = () => {
  ImportMock.restore();
  const mockManager = ImportMock.mockClass(tsdav, 'DAVClient');
  // @ts-ignore
  mockManager.set('login', () => {
    return;
  });

  // @ts-ignore
  mockManager.set('fetchCalendars', () => {
    return [
      {
        components: ['VEVENT', 'VTODO'],
        ctag: 'ABCDE',
        displayName: 'default',
        url: 'cal',
      } as DAVCalendar,
    ];
  });

  // @ts-ignore
  mockManager.set('createVCard', () => {
    return {
      status: 200,
      etag: 'ABCDE',
      url: 'card',
    } as unknown as Response;
  });

  // @ts-ignore
  mockManager.set('deleteVCard', () => {
    return {
      status: 200,
    } as unknown as Response;
  });

  // @ts-ignore
  mockManager.set('createCalendarObject', () => {
    return {
      url: 'http://localhost:8012/test',
    };
  });

  // @ts-ignore
  mockManager.set('deleteObject', () => {
    return {
      status: 204,
    };
  });

  // @ts-ignore
  mockManager.set('makeCalendar', () => {
    return [
      {
        ok: true,
      },
    ];
  });

  // @ts-ignore
  mockManager.set('updateCalendarObject', () => {
    return {
      url: 'http://localhost:8012/test',
    };
  });

  // @ts-ignore
  mockManager.set('fetchCalendarObjects', () => {
    return [
      {
        data: testIcalString,
        etag: 'ABCDE123',
        url: 'http://localhost:8012/test',
      },
    ];
  });

  // @ts-ignore
  mockManager.set('deleteCalendarObject', () => {
    return;
  });

  const MOCK_URL = 'http://localhost';

  ImportMock.mockFunction(tsdav, 'createAccount', {
    accountType: 'caldav',
    serverUrl: MOCK_URL,
    credentials: {
      username: 'test',
      password: 'test',
    },
    rootUrl: MOCK_URL,
    principalUrl: MOCK_URL,
    homeUrl: MOCK_URL,
    calendars: [
      {
        components: ['VEVENT', 'VTODO'],
        ctag: 'ABCDE',
        displayName: 'default',
        url: 'cal',
      },
    ],
  } as DAVAccount);

  return mockManager;
};

export const mockTsDavEvent = (icalString: string) => {
  ImportMock.restore();
  const mockManager = ImportMock.mockClass(tsdav, 'DAVClient');
  // @ts-ignore
  mockManager.set('login', () => {
    return;
  });

  // @ts-ignore
  mockManager.set('fetchCalendars', () => {
    return [
      {
        components: ['VEVENT', 'VTODO'],
        ctag: 'ABCDE',
        displayName: 'default',
        url: 'cal',
      } as DAVCalendar,
    ];
  });

  // @ts-ignore
  mockManager.set('createCalendarObject', () => {
    return {
      url: 'http://localhost:8012/test',
    };
  });

  // @ts-ignore
  mockManager.set('deleteObject', () => {
    return {
      status: 204,
    };
  });

  // @ts-ignore
  mockManager.set('makeCalendar', () => {
    return [
      {
        ok: true,
      },
    ];
  });

  // @ts-ignore
  mockManager.set('updateCalendarObject', () => {
    return {
      url: 'http://localhost:8012/test',
    };
  });

  // @ts-ignore
  mockManager.set('fetchCalendarObjects', () => {
    return [
      {
        data: icalString,
        etag: 'ABCDE123',
        url: 'http://localhost:8012/test',
      },
    ];
  });

  // @ts-ignore
  mockManager.set('deleteCalendarObject', () => {
    return;
  });

  const MOCK_URL = 'http://localhost';

  ImportMock.mockFunction(tsdav, 'createAccount', {
    accountType: 'caldav',
    serverUrl: MOCK_URL,
    credentials: {
      username: 'test',
      password: 'test',
    },
    rootUrl: MOCK_URL,
    principalUrl: MOCK_URL,
    homeUrl: MOCK_URL,
    calendars: [
      {
        components: ['VEVENT', 'VTODO'],
        ctag: 'ABCDE',
        displayName: 'default',
        url: 'cal',
      },
    ],
  } as DAVAccount);

  return mockManager;
};

export const mockTsDavUnauthorized = () => {
  ImportMock.restore();

  const mockManager = ImportMock.mockClass(tsdav, 'DAVClient');
  // @ts-ignore
  mockManager.set('login', () => {
    throw Error();
  });

  return mockManager;
};

export const mockIcalStrings = (icalStrings: string[]) => {
  ImportMock.restore();
  const mockManager = ImportMock.mockClass(tsdav, 'DAVClient');
  // @ts-ignore
  mockManager.set('login', () => {
    return;
  });

  // @ts-ignore
  mockManager.set('fetchCalendars', () => {
    return [
      {
        components: ['VEVENT', 'VTODO'],
        ctag: 'ABCDE',
        displayName: 'default',
        url: 'cal',
      } as DAVCalendar,
    ];
  });

  // @ts-ignore
  mockManager.set('createCalendarObject', () => {
    return {
      url: 'http://localhost:8012/test',
    };
  });

  // @ts-ignore
  mockManager.set('deleteObject', () => {
    return {
      status: 204,
    };
  });

  // @ts-ignore
  mockManager.set('makeCalendar', () => {
    return [
      {
        ok: true,
      },
    ];
  });

  // @ts-ignore
  mockManager.set('updateCalendarObject', () => {
    return {
      url: 'http://localhost:8012/test',
    };
  });

  // @ts-ignore
  mockManager.set('fetchCalendarObjects', () => {
    return icalStrings.map((icalString) => ({
      data: icalString,
      etag: 'ABCDE123',
      url: 'http://localhost:8012/test',
    }));
  });

  // @ts-ignore
  mockManager.set('deleteCalendarObject', () => {
    return;
  });

  const MOCK_URL = 'http://localhost';

  ImportMock.mockFunction(tsdav, 'createAccount', {
    accountType: 'caldav',
    serverUrl: MOCK_URL,
    credentials: {
      username: 'test',
      password: 'test',
    },
    rootUrl: MOCK_URL,
    principalUrl: MOCK_URL,
    homeUrl: MOCK_URL,
    calendars: [
      {
        components: ['VEVENT', 'VTODO'],
        ctag: 'ABCDE',
        displayName: 'default',
        url: 'cal',
      },
    ],
  } as DAVAccount);

  return mockManager;
};
