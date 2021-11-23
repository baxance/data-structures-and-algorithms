'use strict';

const insertionSort = require('./insertionSort.js');

describe('sort an array', () => {
  test('Sort the example array', () => {
    let array = [8,4,23,42,16,15];
    console.log(array);
    let sort = insertionSort(array);
    expect(sort).toBe([4,8,23,42,16,15]);
  });
});
