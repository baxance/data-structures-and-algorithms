'use strict';

class Node {
  constructor(val)
  {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor()
  {
    this.head = null;
  }

  insert(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(val) {
    let current = this.head;
    while(current !== null) {
      if (current.val === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    // console.log('hitting toString method');
    let str = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      // console.log('hitting toString loop');
      str += '{ ' + currentNode.val + ' } -> ';
      currentNode = currentNode.next;
    }
    str += 'NULL';
    // console.log('exiting toString loop with string of: ' + str);
    return str;
  }

  append(val) {
    let newNode = new Node(val);
    let current = this.head;
    while(current !== null) {
      if (current.next === null) {
        newNode.next = null;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  insertBefore(val, newVal) {
    //adds a new node with the given new value immediately before the first node that has the value specified
    let newNode = new Node(newVal);
    let current = this.head;
    if(current.val === val) {
      newNode.next = current;
      this.head = newNode;
      return;
    }
    while (current !== null) {
      if (current.next.val === val && current.next !== null) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  insertAfter(val, newVal) {
    //adds a new node with the given new value immediately after the first node that has the value specified
    let newNode = new Node(newVal);
    let current = this.head;
    while (current !== null) {
      if (current.val === val) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  kthFromEnd(k) {

    if (k < 0) {return null;}

    let counter = 0;
    let current = this.head;

    while (current !== null) {
      counter++;
      if (current.next === null && k === 0) {
        return current.val;
      }
      current = current.next;
    }

    if (counter === k) {
      return null;
    }

    let nodesFromHead = counter - k;
    if (nodesFromHead < 0) {return null;}

    current = this.head;
    if (nodesFromHead > 0) {
      current = current.next;
      nodesFromHead--;
    }
    return current.val;
  }

}


module.exports = {LinkedList, Node};
