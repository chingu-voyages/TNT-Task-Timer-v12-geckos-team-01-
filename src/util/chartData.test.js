import chartFormats from './chartData';

// Mock data creation helper function
const addMinutes = (date, minutes) => {
  const startDate = new Date(date);
  return startDate.setMinutes(startDate.getMinutes() + minutes);
};

let oneHourMockData;
beforeEach(() => {
  oneHourMockData = [
    {
      taskName: 'Eating Lunch',
      dateCreated: '2019-10-24T00:30:07.411Z',
      timerStatusArray: [
        { status: 'started', when: '2019-10-24T00:30:07.411Z' },
        {
          status: 'paused',
          when: addMinutes('2019-10-24T00:30:07.411Z', 30)
        },
        {
          status: 'resumed',
          when: addMinutes('2019-10-24T00:30:07.411Z', 60)
        },
        { status: 'paused', when: addMinutes('2019-10-24T00:30:07.411Z', 90) }
      ]
    },
    {
      taskName: 'Reading book',
      dateCreated: '2019-10-24T00:30:07.411Z',
      timerStatusArray: [
        { status: 'started', when: '2019-10-24T00:30:07.411Z' },
        {
          status: 'paused',
          when: addMinutes('2019-10-24T00:30:07.411Z', 30)
        },
        {
          status: 'resumed',
          when: addMinutes('2019-10-24T00:30:07.411Z', 60)
        },
        { status: 'paused', when: addMinutes('2019-10-24T00:30:07.411Z', 90) }
      ]
    },
    {
      taskName: 'Coding',
      dateCreated: '2019-10-25T00:30:07.411Z',
      timerStatusArray: [
        { status: 'started', when: '2019-10-25T00:30:07.411Z' },
        {
          status: 'paused',
          when: addMinutes('2019-10-25T00:30:07.411Z', 30)
        },
        {
          status: 'resumed',
          when: addMinutes('2019-10-25T00:30:07.411Z', 60)
        },
        { status: 'paused', when: addMinutes('2019-10-25T00:30:07.411Z', 90) }
      ]
    },
    {
      taskName: 'Dinner',
      dateCreated: '2019-10-26T00:30:07.411Z',
      timerStatusArray: [
        { status: 'started', when: '2019-10-26T00:30:07.411Z' },
        {
          status: 'paused',
          when: addMinutes('2019-10-26T00:30:07.411Z', 30)
        },
        {
          status: 'resumed',
          when: addMinutes('2019-10-26T00:30:07.411Z', 60)
        },
        { status: 'paused', when: addMinutes('2019-10-26T00:30:07.411Z', 90) }
      ]
    },
    {
      taskName: 'working',
      dateCreated: '2019-10-26T00:30:07.411Z',
      timerStatusArray: [
        { status: 'started', when: '2019-10-26T00:30:07.411Z' },
        {
          status: 'paused',
          when: addMinutes('2019-10-26T00:30:07.411Z', 30)
        },
        {
          status: 'resumed',
          when: addMinutes('2019-10-26T00:30:07.411Z', 60)
        },
        { status: 'paused', when: addMinutes('2019-10-26T00:30:07.411Z', 90) }
      ]
    }
  ];
});

describe('getDailyTotals()', () => {
  test('function exists', () => {
    expect(typeof chartFormats.getDailyTotals).toBe('function');
  });

  test('always returns an array', () => {
    expect(chartFormats.getDailyTotals()).toBeInstanceOf(Array);
    expect(chartFormats.getDailyTotals(undefined)).toBeInstanceOf(Array);
    expect(chartFormats.getDailyTotals(oneHourMockData)).toBeInstanceOf(Array);
  });

  test('all items in array are objects with {day,minutes} keys', () => {
    const expected = {
      day: expect.anything(),
      minutes: expect.anything()
    };
    chartFormats
      .getDailyTotals()
      .forEach(item => expect(item).toEqual(expect.objectContaining(expected)));
  });
});

describe('getTaskTotals()', () => {
  test('function exists', () => {
    expect(typeof chartFormats.getTaskTotals).toBe('function');
  });

  test('always returns an array', () => {
    expect(chartFormats.getTaskTotals()).toBeInstanceOf(Array);
    expect(chartFormats.getTaskTotals(undefined)).toBeInstanceOf(Array);
    expect(chartFormats.getTaskTotals(oneHourMockData)).toBeInstanceOf(Array);
  });

  test('all items in array are objects with {taskName: `string` ,seconds: `number`} ', () => {
    const expected = {
      taskName: expect.anything(),
      seconds: expect.anything()
    };
    chartFormats
      .getTaskTotals(oneHourMockData)
      .forEach(item => expect(item).toEqual(expect.objectContaining(expected)));
  });
});
