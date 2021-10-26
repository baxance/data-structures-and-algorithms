'use strict';

// Require our linked list implementation
const {LinkedList, Node} = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('Linked List Insertion', () => {
  test('Insert a new node at the HEAD of a LL', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    newList.head.next = new Node(2);
    newList.head.next.next = new Node(3);
    newList.head.next.next.next = new Node(4);
    newList.insert(5);
    expect(newList.head.val).toBe(5);
  });
});

describe('Linked List Includes', () => {
  test('Check if value exists as a Node value in LL', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    newList.head.next = new Node(2);
    newList.head.next.next = new Node(3);
    newList.head.next.next.next = new Node(4);
    expect(newList.includes(3)).toBe(true);
  });
});

describe('Linked List toString', () => {
  test('convert LL values to string formatted "{ a } -> { b } -> { c } -> NULL"  ', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    newList.head.next = new Node(2);
    newList.head.next.next = new Node(3);
    newList.head.next.next.next = new Node(4);
    expect(newList.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL');
  });
});

describe('Linked List Append', () => {
  it('append one new value to end of LL', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    newList.head.next = new Node(2);
    newList.head.next.next = new Node(3);
    newList.append(4);
    expect(newList.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL');
  });
});

describe('Linked List Append multiple', () => {
  it('append multiple values to end of LL', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    newList.head.next = new Node(2);
    newList.head.next.next = new Node(3);
    newList.append(4);
    newList.append(5);
    expect(newList.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> NULL');
  });
});

describe('Linked List insert before middle', () => {
  it('insert a value before the middle value', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    newList.head.next = new Node(2);
    newList.head.next.next = new Node(3);
    newList.insertBefore(2, 4);
    expect(newList.toString()).toBe('{ 1 } -> { 4 } -> { 2 } -> { 3 } -> NULL');
  });
});

describe('Linked List insert before first', () => {
  it('insert a value before the first value', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    newList.head.next = new Node(2);
    newList.head.next.next = new Node(3);
    newList.insertBefore(1, 4);
    expect(newList.toString()).toBe('{ 4 } -> { 1 } -> { 2 } -> { 3 } -> NULL');
  });
});

describe('Linked List insert after middle', () => {
  it('insert a value after the middle value', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    newList.head.next = new Node(2);
    newList.head.next.next = new Node(3);
    newList.insertAfter(2, 4);
    expect(newList.toString()).toBe('{ 1 } -> { 2 } -> { 4 } -> { 3 } -> NULL');
  });
});

describe('Linked List insert after last', () => {
  it('insert a value after the last value in the LL', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    newList.head.next = new Node(2);
    newList.head.next.next = new Node(3);
    newList.insertAfter(3, 4);
    expect(newList.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL');
  });
});
