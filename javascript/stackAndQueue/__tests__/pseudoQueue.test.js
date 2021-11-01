'use strict';

const { PseudoQueue } = require('../pseudoQueue');

describe('Stack', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('Can successfully enqueue into pseudoqueue', () => {
  test('Insert a new node at the back of the pseudoqueue', () => {
    let testStack = new PseudoQueue();
    testStack.enqueue(1);
    expect(testStack.stackOne.top.val).toBe(1);
  });
});

describe('Can successfully enqueue multiple nodes into pseudoqueue', () => {
  test('Sequentially insert multiple nodes into the pseudoqueue', () => {
    let testStack = new PseudoQueue();
    testStack.enqueue(1);
    testStack.enqueue(2);
    expect(testStack.stackOne.top.val).toBe(2);
  });
});

describe('Can successfully dequeue from pseudoqueue', () => {
  test('Returns the first Node pseudo-enqueued', () => {
    let testStack = new PseudoQueue();
    testStack.enqueue(1);
    testStack.enqueue(2);
    testStack.enqueue(3);
    // console.log('test stack 1 top value: ' + testStack.stackOne.top.val);
    expect(testStack.dequeue()).toBe(1);
  });
});

describe('Can successfully dequeue the pseudoqueue until empty', () => {
  test('remove all nodes from pseudoqueue', () => {
    let testStack = new PseudoQueue();
    testStack.enqueue(1);
    testStack.enqueue(2);
    testStack.enqueue(3);
    testStack.dequeue();
    testStack.dequeue();
    testStack.dequeue();
    // console.log('test stack 1 top value: ' + testStack.stackOne.top.val);
    expect(testStack.dequeue()).toBe('stacks empty');
  });
});

describe('Can partially dequeue the pseudoqueue then enqueue maintaining the proper order of entry', () => {
  test('remove all nodes from pseudoqueue', () => {
    let testStack = new PseudoQueue();
    testStack.enqueue(1);
    testStack.enqueue(2);
    testStack.enqueue(3);
    testStack.dequeue();
    testStack.dequeue();
    testStack.enqueue(2);
    // console.log('test stack 1 top value: ' + testStack.stackOne.top.val);
    expect(testStack.stackOne.top.val).toBe(2);
  });
});
