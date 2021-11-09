'use strict';

const BinaryTree = require('../binaryTree');
// const BinarySearchTree =  require('../binarySearchTree');

// const Node = require('../node');
// require('../binaryTree');

describe('Binary Tree', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('Can find the max value stored in the tree', () => {
  test('Returns 10 from the tree', () => {
    let testTree = new BinaryTree();
    testTree.add(1);
    testTree.add(2);
    testTree.add(3);
    testTree.add(4);
    testTree.add(5);
    testTree.add(6);
    testTree.add(7);
    testTree.add(8);
    testTree.add(9);
    testTree.add(10);
    expect(testTree.findMax()).toBe(10);
  });
});
