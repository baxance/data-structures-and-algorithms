'use strict';

const {LinkedList, Node} = require('../index');

describe('zip two equally sized linked lists together', () => {
  it('should weave the nodes of two linked lists into one', () => {
    let newList1 = new LinkedList();
    newList1.head = new Node(1);
    newList1.head.next = new Node(3);
    newList1.head.next.next = new Node(5);
    let newList2 = new LinkedList();
    newList2.head = new Node(2);
    newList2.head.next = new Node(4);
    newList2.head.next.next = new Node(6);
    let newList3 = new LinkedList;
    expect(newList3.zipLists(newList1, newList2)).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });
});

describe('zip two linked lists of different sizes together (first LL short)', () => {
  it('When first LL runs out of nodes, the nodes of the second LL should be added sequentially to the end', () => {
    let newList1 = new LinkedList();
    newList1.head = new Node(1);
    newList1.head.next = new Node(3);
    newList1.head.next.next = new Node(5);
    let newList2 = new LinkedList();
    newList2.head = new Node(2);
    newList2.head.next = new Node(4);
    newList2.head.next.next = new Node(6);
    newList2.head.next.next.next = new Node(7);
    newList2.head.next.next.next.next = new Node(8);
    let newList3 = new LinkedList;
    expect(newList3.zipLists(newList1, newList2)).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> { 8 } -> NULL');
  });
});

describe('zip two linked lists of different sizes together (second LL short)', () => {
  it('When second LL runs out of nodes, the nodes of the first LL should be added sequentially to the end', () => {
    let newList1 = new LinkedList();
    newList1.head = new Node(1);
    newList1.head.next = new Node(3);
    newList1.head.next.next = new Node(5);
    newList1.head.next.next.next = new Node(7);
    newList1.head.next.next.next.next = new Node(8);
    let newList2 = new LinkedList();
    newList2.head = new Node(2);
    newList2.head.next = new Node(4);
    newList2.head.next.next = new Node(6);
    let newList3 = new LinkedList;
    expect(newList3.zipLists(newList1, newList2)).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> { 8 } -> NULL');
  });
});

describe('zip two linked lists together, if one LL is Null', () => {
  it('should return the first list intact', () => {
    console.log('running null LL2 test');
    let newList1 = new LinkedList();
    newList1.head = new Node(1);
    newList1.head.next = new Node(3);
    newList1.head.next.next = new Node(5);
    let newList2 = new LinkedList();
    let newList3 = new LinkedList;
    expect(newList3.zipLists(newList1, newList2)).toBe('{ 1 } -> { 3 } -> { 5 } -> NULL');
  });
});

describe('zip two linked lists together, if one LL is Null', () => {
  it('should return the second list intact', () => {
    console.log('running null LL1 test');
    let newList1 = new LinkedList();
    let newList2 = new LinkedList();
    newList2.head = new Node(2);
    newList2.head.next = new Node(4);
    newList2.head.next.next = new Node(6);
    let newList3 = new LinkedList;
    expect(newList3.zipLists(newList1, newList2)).toBe('{ 2 } -> { 4 } -> { 6 } -> NULL');
  });
});
