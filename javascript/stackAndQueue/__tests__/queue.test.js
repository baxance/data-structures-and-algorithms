'use strict';

const { Queue, Node } = require('../queue');

describe('Queue', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('Can successfully enqueue into a queue', () => {
  test('Insert a new node at the back of the queue', () => {
    let testQueue = new Queue();
    testQueue.front = new Node(1);
    testQueue.front.next = new Node(2);
    testQueue.enqueue(3);
    expect(testQueue.back.val).toBe(3);
  });
});

describe('Can successfully enqueue multiple values into a queue', () => {
  test('Insert multiple new nodes at the back of the queue', () => {
    let testQueue = new Queue();
    testQueue.front = new Node(1);
    testQueue.front.next = new Node(2);
    testQueue.enqueue(3);
    testQueue.enqueue(4);
    expect(testQueue.back.val).toBe(4);
  });
});

describe('Can successfully dequeue out of a queue the expected value', () => {
  test('Remove the node at the front of the queue', () => {
    let testQueue = new Queue();
    testQueue.front = new Node(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.dequeue()).toBe(1);
  });
});

describe('Can successfully peek into a queue, seeing the expected value', () => {
  test('Return the value of the node at the front of the queue', () => {
    let testQueue = new Queue();
    testQueue.front = new Node(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.peek()).toBe(1);
  });
});

describe('Can successfully empty a queue after multiple dequeues', () => {
  test('Return the value of the node at the front of the queue', () => {
    let testQueue = new Queue();
    testQueue.front = new Node(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    testQueue.dequeue();
    testQueue.dequeue();
    expect(testQueue.dequeue()).toBe(null);
  });
});

describe('Can successfully instantiate an empty queue', () => {
  test('Return the value of the node at the front of the queue', () => {
    let testQueue = new Queue();
    expect(testQueue.isEmpty()).toBe(true);
  });
});

describe('Calling dequeue or peek on empty queue raises exception', () => {
  test('Return an exception if peeking/dequeueing an empty eueue', () => {
    let testQueue = new Queue();
    expect(testQueue.dequeue).toBe();
  });
});
