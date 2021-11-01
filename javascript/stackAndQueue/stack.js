'use strict';

class Node {
  constructor(val)
  {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor()
  {
    this.top = null;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.top) {
      this.top = newNode;
    }

    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    // try {
    if (!this.top) {
      return null;
    }
    let temp = this.top;
    this.top = top.next;
    temp.next = null;
    return temp.val;
  }
  // catch(e) {
  //   return(e + 'empty stack exception');
  // }
  // }

  peek() {
    return this.top.val;
  }

  isEmpty() {
    return top === null;
  }
}

module.exports = { Stack, Node };
