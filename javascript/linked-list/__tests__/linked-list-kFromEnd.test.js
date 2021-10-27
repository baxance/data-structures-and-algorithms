'use strict';

// Require our linked list implementation
const {LinkedList, Node} = require('../index');

describe('k is greater than the length of the LL', () => {
  it('return null, k is out of bounds of the LL', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    newList.head.next = new Node(2);
    newList.head.next.next = new Node(3);
    newList.head.next.next.next = new Node(4);
    expect(newList.kthFromEnd(6)).toBe(null);
  });
});

describe('k and length of list are the same', () => {
  it('return null, k is out of bounds of the LL', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    newList.head.next = new Node(2);
    newList.head.next.next = new Node(3);
    newList.head.next.next.next = new Node(4);
    expect(newList.kthFromEnd(4)).toBe(null);
  });
});

describe('k is a negative integer', () => {
  it('returns null', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    newList.head.next = new Node(2);
    newList.head.next.next = new Node(3);
    newList.head.next.next.next = new Node(4);
    expect(newList.kthFromEnd(-4)).toBe(null);
  });
});

describe('LL is a single Node', () => {
  it('Returns an error unless k is 0 which returns the value of the single node', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    expect(newList.kthFromEnd(0)).toBe(1);
  });
});

describe('kth from the end', () => {
  it('return the value of the node that is k places from the tail of the LL', () => {
    let newList = new LinkedList();
    newList.head = new Node(1);
    newList.head.next = new Node(2);
    newList.head.next.next = new Node(3);
    newList.head.next.next.next = new Node(4);
    expect(newList.kthFromEnd(2)).toBe(2);
  });
});
