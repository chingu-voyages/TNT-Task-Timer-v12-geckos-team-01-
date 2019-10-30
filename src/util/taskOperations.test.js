import taskOperations from './taskOperations';

// Mock task builder utility which should be tested as well
const addMinutes = (date, minutes) => {
  const startDate = new Date(date);
  return startDate.setMinutes(startDate.getMinutes() + minutes);
};

describe('Check Available chartsFormats', () => {
  test('contains totalTime()', () => {
    expect(typeof taskOperations.totalTime).toBe('function');
  });
});

describe('totalTime() returns correct vaules', () => {
  let oneHourMockTask;
  let twoHourMockTask;
  beforeEach(() => {
    oneHourMockTask = {
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
    };
    twoHourMockTask = {
      taskName: 'Eating Lunch',
      dateCreated: '2019-10-24T00:30:07.411Z',
      timerStatusArray: [
        { status: 'started', when: '2019-10-24T00:30:07.411Z' },
        {
          status: 'paused',
          when: addMinutes('2019-10-24T00:30:07.411Z', 60)
        },
        {
          status: 'resumed',
          when: addMinutes('2019-10-24T00:30:07.411Z', 60)
        },
        { status: 'paused', when: addMinutes('2019-10-24T00:30:07.411Z', 120) }
      ]
    };
  });

  test('Returned value is a number', () => {
    expect(typeof taskOperations.totalTime(oneHourMockTask)).toBe('number');
  });
  test('One hour mock task returns 3600 seconds', () => {
    expect(taskOperations.totalTime(oneHourMockTask)).toBe(3600);
  });
  test('Two hour mock task returns 7200 seconds', () => {
    expect(taskOperations.totalTime(twoHourMockTask)).toBe(7200);
  });
});
