import chartFormats from './chartData';
import getOneHourMock from './mockTaskData';

describe('getDailyTotals()', () => {
  test('function exists', () => {
    expect(typeof chartFormats.getDailyTotals).toBe('function');
  });

  test('always returns an array', () => {
    expect(chartFormats.getDailyTotals()).toBeInstanceOf(Array);
    expect(chartFormats.getDailyTotals(undefined)).toBeInstanceOf(Array);
    expect(chartFormats.getDailyTotals(getOneHourMock())).toBeInstanceOf(Array);
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
    expect(chartFormats.getTaskTotals(getOneHourMock())).toBeInstanceOf(Array);
  });

  test('all items in array are objects with {taskName: `string` ,seconds: `number`} ', () => {
    const expected = {
      taskName: expect.anything(),
      seconds: expect.anything()
    };
    chartFormats
      .getTaskTotals(getOneHourMock())
      .forEach(item => expect(item).toEqual(expect.objectContaining(expected)));
  });
});
