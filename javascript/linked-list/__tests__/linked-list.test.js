'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('Linked List Insertion', () => {
  test('Insert a new node at the HEAD of a LL', () => {
    LinkedList.insert(5);
    expect(LinkedList.head).toBe(5);
  });
});

describe('Linked List Includes', () => {
  test('Check if value exists as a Node value in LL', () => {
    expect(LinkedList.includes(3)).toBe(3);
  });
});

describe('Linked List toString', () => {
  test('convert LL values to string formatted "{ a } -> { b } -> { c } -> NULL"  ', () => {

    expect(LinkedList.toString).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { NULL }');
  });
});
