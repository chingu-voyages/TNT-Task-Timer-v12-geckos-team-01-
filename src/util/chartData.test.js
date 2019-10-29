import chartFormats from './chartData';

const addMinutes = (date, minutes) => {
  const startDate = new Date(date);
  return startDate.setMinutes(startDate.getMinutes() + minutes);
};

describe('Check Available chartsFormats', () => {
  test('contains getDailyTotals()', () => {
    expect(typeof chartFormats.getDailyTotals).toBe('function');
  });
});

describe('getDailyTotals() returns correct data', () => {
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

  test('always returns an array', () => {
    expect(chartFormats.getDailyTotals()).toBeInstanceOf(Array);
    expect(chartFormats.getDailyTotals(undefined)).toBeInstanceOf(Array);
    expect(chartFormats.getDailyTotals(oneHourMockData)).toBeInstanceOf(Array);
  });

  test('all items in array are objects with {day,minutes} keys', () => {
    expect(chartFormats.getDailyTotals()).toMatchObject({
      day: 323123,
      minutes: 123123
    });
  });
});
