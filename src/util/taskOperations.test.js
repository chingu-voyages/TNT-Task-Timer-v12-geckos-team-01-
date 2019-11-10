import taskOperations from './taskOperations';
import { getOneHourSingleTask, getTwoHourSingleTask } from './mockTaskData';

describe('Check Available chartsFormats', () => {
  test('contains totalTime()', () => {
    expect(typeof taskOperations.totalTime).toBe('function');
  });
});

describe('totalTime() returns correct values', () => {
  test('Returned value is a number', () => {
    expect(typeof taskOperations.totalTime(getOneHourSingleTask())).toBe(
      'number'
    );
  });
  test('One hour mock task returns 3600 seconds', () => {
    expect(taskOperations.totalTime(getOneHourSingleTask())).toBe(3600);
  });
  test('Two hour mock task returns 7200 seconds', () => {
    expect(taskOperations.totalTime(getTwoHourSingleTask())).toBe(7200);
  });
});
