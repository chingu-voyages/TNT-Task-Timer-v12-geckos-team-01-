import chartFormats from './chartData';

describe('Check Available chartsFormats', () => {
  test('contains getDailyTotals()', () => {
    expect(typeof chartFormats.getDailyTotals).toBe('function');
  });
});

describe('getDailyTotals() returns correct data', () => {
  test('always returns an array', () => {
    expect(chartFormats.getDailyTotals()).toBeInstanceOf(Array);
    expect(chartFormats.getDailyTotals(undefined)).toBeInstanceOf(Array);
  });
});
