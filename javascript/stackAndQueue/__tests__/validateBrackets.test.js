'use strict';

let validateBrackets = require('../validateBrackets');

describe('Validate simple balanced brackets', () => {
  test('Balanced brackets should return True', () => {
    expect(validateBrackets('()')).toBe(true);
  });
});

describe('Validate simple unbalanced brackets', () => {
  test('imbalanced brackets should return False', () => {
    expect(validateBrackets('(){[]')).toBe(false);
  });
});
