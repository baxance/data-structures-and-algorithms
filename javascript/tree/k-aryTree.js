'use strict';

const BinaryTree = require('./binaryTree');

function fizzBuzzTree(tree, node) {
  if (node) {
    if ((node % 15) === 0) {
      node = 'FizzBuzz';
    }
    else if ((node % 5) === 0 ) {
      node = 'Buzz';
    }
    else if ((node % 3) === 0 ) {
      node = 'Fizz';
    }
    if (node.left !== null) {
      this.fizzBuzzTree(tree, node.left);
    }
    if (node.right !== null) {
      this.fizzBuzzTree(tree, node.right);
    }
  }

  return tree;

}
