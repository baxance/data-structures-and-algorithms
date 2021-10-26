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

  insert(val){
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(val){
    let current = this.head;
    while(current !== null) {
      if (current.val === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString(){
    console.log('hitting toString method');
    let str = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log('hitting toString loop');
      str += '{ ' + currentNode.val + ' } -> ';
      currentNode = currentNode.next;
    }
    str += 'NULL';
    console.log('exiting toString loop with string of: ' + str);
    return str;
  }
}

const list = new LinkedList();

list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(4);

module.exports = {LinkedList, Node};
