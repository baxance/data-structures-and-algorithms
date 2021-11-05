'use strict';

const BinaryTree = require('../binaryTree');
const BinarySearchTree =  require('../binarySearchTree');

const Node = require('../node');
// require('../binaryTree');

describe('Binary Tree', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

/*
X  Can successfully instantiate an empty tree
X  Can successfully instantiate a tree with a single root node
X  Can successfully add a left child and right child to a single root node
X  Can successfully return a collection from a preorder traversal
X  Can successfully return a collection from an inorder traversal
  Can successfully return a collection from a postorder traversal
*/

describe('Can instantiate an empty tree', () => {
  test('returns an empty tree', () => {
    let testTree = new BinaryTree();
    expect(testTree.root).toBe(null);
  });
});

describe('Can successfully instantiate a tree with a single root node', () => {
  test('returns an tree Root', () => {
    let testTree = new BinaryTree();
    testTree.root = 1;
    expect(testTree.root).toBe(1);
  });
});

describe('Can successfully add a left child and right child to a single root node', () => {
  test('Adds a left and right child to a root Node', () => {
    let testTree = new BinarySearchTree();
    testTree.root = new Node(5);
    testTree.add(4);
    testTree.add(6);
    // console.log(testTree.root.right.value);
    expect(testTree.root.left.value).toBe(4);
    expect(testTree.root.right.value).toBe(6);
  });
});

describe('Can successfully return a collection from a preorder traversal', () => {
  test('Return a Tree with preorder traversal', () => {
    let testTree = new BinaryTree();
    testTree.root = new Node(5);
    testTree.root.left = new Node(2);
    testTree.root.right = new Node(8);
    testTree.root.left.left = new Node(4);
    testTree.root.left.right = new Node(7);
    testTree.root.right.right = new Node(11);
    let results = [];
    expect(testTree._preOrder(testTree.root, results)).toEqual([ 5, 2, 4, 7, 8, 11 ]);
    // There's got to be a better way to test that, something that calls the true entry point of the method preOrder() and returns the array
  });
});

describe('Can successfully return a collection from an inorder traversal', () => {
  test('Return a Tree with inorder traversal', () => {
    let testTree = new BinaryTree();
    testTree.root = new Node(5);
    testTree.root.left = new Node(2);
    testTree.root.right = new Node(8);
    testTree.root.left.left = new Node(4);
    testTree.root.left.right = new Node(7);
    testTree.root.right.right = new Node(11);
    let results = [];
    // console.log(testTree._inOrder(testTree.root, results));
    expect(testTree._inOrder(testTree.root, results)).toEqual([ 4, 2, 7, 5, 8, 11 ]);
  });
});

describe('Can successfully return a collection from a postorder traversal', () => {
  test('Return a Tree with postorder traversal', () => {
    let testTree = new BinaryTree();
    testTree.root = new Node(5);
    testTree.root.left = new Node(2);
    testTree.root.right = new Node(8);
    testTree.root.left.left = new Node(4);
    testTree.root.left.right = new Node(7);
    testTree.root.right.right = new Node(11);
    let results = [];
    // console.log(testTree._postOrder(testTree.root, results));
    expect(testTree._postOrder(testTree.root, results)).toEqual([ 4, 7, 2, 11, 8, 5 ]);
  });
});
