'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list/index.js');
let average = require('./linked-list-recursion.js');

describe('Linked List Recursive average', () => {
  test('works', () => {

    let testList = new LinkedList();
    testList.head = 1;
    testList.head.next = 5;
    testList.head.next.next = 9;
    expect(average(testList)).toBe(5);
  });
});
