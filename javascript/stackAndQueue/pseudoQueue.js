'use strict';

const { Stack } = require('./stack');

class PseudoQueue {

  constructor()
  {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(val) {
    while (this.stackTwo.top) {
      this.stackOne.push(this.stackTwo.pop());
    }
    if (!this.stackTwo.top){
      this.stackOne.push(val);
    }
  }

  dequeue() {
    let deQ;
    if (!this.stackTwo.top) {
      if (!this.stackOne.top){
        return 'stacks empty';
      } else {
        while (this.stackOne.top) {
          let temp = this.stackOne.top.next;
          console.log('stack one TOP: ' + this.stackOne.top.val);
          this.stackTwo.push(this.stackOne.pop());
          this.stackOne.top = temp;
          console.log('stack two TOP: ' + this.stackTwo.top.val);
        } deQ = this.stackTwo.pop();
      }
    } else {
      deQ = this.stackTwo.pop();
    } return deQ;
  }
}

module.exports = { PseudoQueue };
