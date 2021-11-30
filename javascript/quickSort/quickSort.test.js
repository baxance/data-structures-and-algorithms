'use strict';

// Require our linked list implementation
const quickSort = require('./quickSort.js');

describe('Quick Sort', () => {

  it('works', () => {
    expect(true).toBeTruthy();
  });

  test('quick sort demo input', () => {
    let testArray =[8,4,23,42,16,15];
    let length = testArray.length;
    let results = quickSort(testArray, 0, length);
    results.splice(0, 1);
    console.log(results);
    expect(results).toEqual([4,8,15,16,23,42]);
  });

});
