import zeroPad from './zeroPad';

describe('zeroPad adds a leading 0 to all inputs < 10', () => {
  test('always returns a string', () => {
    expect(typeof zeroPad(0)).toBe('string');
    expect(typeof zeroPad(10)).toBe('string');
    expect(typeof zeroPad([])).toBe('string');
    expect(typeof zeroPad('34')).toBe('string');
    expect(typeof zeroPad({})).toBe('string');
  });

  test('adds a leading zero to 9', () => {
    expect(zeroPad(9)).toBe('09');
  });

  test('does not add a leading zero to 11', () => {
    expect(zeroPad(11)).toBe('11');
  });

  test('negative numbers will return a "0" leading the "-"', () =>
    expect(zeroPad(-4)).toBe('0-4'));

  describe('works with string inputs', () => {
    test('Does not add a leading zero to "12"', () => {
      expect(zeroPad('12')).toBe('12');
    });
    test('adds a leading zero to "8"', () => {
      expect(zeroPad('8')).toBe('08');
    });
    test('adds a leading zero to ""', () => {
      expect(zeroPad('')).toBe('0');
    });
    test('adds a leading zero to "-4"', () =>
      expect(zeroPad('-4')).toBe('0-4'));
  });
});
