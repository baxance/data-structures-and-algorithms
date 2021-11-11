'use strict';

const BinaryTree = require('../binaryTree');
const fizzBuzzTree = require('../k-aryTree');

describe('Binary Tree', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('Can find the max value stored in the tree', () => {
  test('Returns 10 from the tree', () => {
    let testTree = new BinaryTree();
    testTree.root = 3;
    testTree.root.left = 5;
    testTree.root.right = 7;
    testTree.root.right.right = 15;
    testTree.root.right.left = 9;
    testTree.root.left.left = 12;
    testTree.root.left.right = 30;
    let newTree = fizzBuzzTree(testTree);
    expect(n).toBe(10);
  });
});
