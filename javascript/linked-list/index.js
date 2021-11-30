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

  zipLists(LL1, LL2) {

    let firstPointer = LL1.head;
    let secondPointer = LL2.head;
    let temp = firstPointer;

    if(firstPointer === null){
      console.log('LL1 is null, returning LL2');
      return LL2.toString();
    }
    if(secondPointer === null){
      console.log('LL2 is null, returning LL1');
      return LL1.toString();
    }
    console.log(LL1.toString());
    console.log(LL2.toString());

    while(firstPointer !== null || secondPointer !== null) {

      if (firstPointer === null && secondPointer !== null) {
        LL1.append(secondPointer.val);
        secondPointer = secondPointer.next;
        console.log('Zipped list when 2nd list is longer than 1st: ' + LL1.toString());
        continue;
      }

      if (firstPointer !== null && secondPointer === null) {
        console.log('Zipped list when 1st list is longer than 2nd: '+ LL1.toString());
        return LL1.toString();
      }

      temp = firstPointer.next;
      firstPointer.next = secondPointer;
      secondPointer = secondPointer.next;
      firstPointer.next.next = temp;
      firstPointer = firstPointer.next.next;
      console.log('first pointer before exiting loop: ' + firstPointer);
    }
    console.log(LL1.toString());
    return LL1.toString();
  }

  average(LL) {
    if (!LL.head) return null;
    let head = LL.head;
    let counter = 0;
    let sum = 0;

    this._average(head, counter, sum);
  }

  _average(head, counter, sum) {
    console.log(head.val);
    console.log(sum);
    console.log(counter);
    console.log(sum/counter);
    counter++;
    sum += head.val;
    let avg = sum/counter;
    if (head.next) {
      this._average(head.next, counter, sum);
    } else return avg;
  }

}

module.exports = {LinkedList, Node};
