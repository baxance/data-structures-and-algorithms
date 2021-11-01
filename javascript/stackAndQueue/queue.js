'use strict';

class Node {
  constructor(val)
  {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor()
  {
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.front.next = newNode;
    }
    this.back = newNode;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;

    return temp.val;
  }

  peek() {
    return this.front.val;
  }

  isEmpty() {
    return this.front === null;
  }

}

module.exports = { Queue, Node };
