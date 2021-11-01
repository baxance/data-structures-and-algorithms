'use strict';

const { Stack, Node } = require('../stack');

describe('Stack', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('Can successfully push onto a stack', () => {
  test('Insert a new node at the top of a Stack', () => {
    let testStack = new Stack();
    testStack.top = new Node(3);
    testStack.top.next = new Node(2);
    testStack.push(1);
    expect(testStack.top.val).toBe(1);
  });
});

describe('Can successfully push multiple values onto a stack', () => {
  test('Sequentially insert a new node at the top of a Stack', () => {
    let testStack = new Stack();
    testStack.top = new Node(4);
    testStack.top.next = new Node(3);
    testStack.push(2);
    testStack.push(1);
    expect(testStack.top.val).toBe(1);
  });
});

describe('Can successfully pop off the stack', () => {
  test('Remove the value at the top of the stack', () => {
    let testStack = new Stack();
    testStack.top = new Node(3);
    testStack.push(2);
    testStack.push(1);
    expect(testStack.pop()).toBe(1);
  });
});

describe('Can successfully empty a stack after multiple pops', () => {
  test('Empty the stack of all nodes with pop()', () => {
    let testStack = new Stack();
    testStack.top = new Node(3);
    testStack.push(2);
    testStack.push(1);
    testStack.pop();
    testStack.pop();
    expect(testStack.pop()).toBe(null);
  });
});

describe('Can successfully peek the next item on the stack', () => {
  test('Return the value of the Node at the top of the stack', () => {
    let testStack = new Stack();
    testStack.top = new Node(3);
    testStack.push(2);
    testStack.push(1);
    expect(testStack.peek()).toBe(1);
  });
});

describe('Can successfully instantiate an empty stack', () => {
  test('Create an empty Stack with a top === null', () => {
    let testStack = new Stack();
    expect(testStack.top).toBe(null);
  });
});

describe('Calling pop or peek on empty stack raises exception', () => {
  test('Return an empty stack exception on an empty stack', () => {
    let testStack = new Stack();
    expect(testStack.pop()).toBe('empty stack exception');
  });
});
