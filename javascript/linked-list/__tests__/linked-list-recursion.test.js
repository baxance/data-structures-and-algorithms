'use strict';

// Require our linked list implementation
const {LinkedList, Node} = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('Linked List Recursion', () => {
  test('return average of LL', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    newList.head.next = new Node(5);
    newList.head.next.next = new Node(9);
    expect(newList._average(newList.head, 0, 0)).toBe(5);
  });
});
