'use strict';

// const LinkedList = require('../linked-list/index.js');

// let LL = new LinkedList();

// LL.insert(1);
// LL.insert(5);
// LL.insert(9);

function average(LL) {

  if (!LL.head) return LL.head;
  let head = LL.head;

  _average(LL, head);
}

function _average(LL, head) {
  let counter;
  let sum;

  sum += head.value;
  counter++;
  
  if (!head.next) {
    return sum/counter;
  }
  _average(LL, head.next);
}

module.exports = average();
