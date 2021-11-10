'use strict';

const BinaryTree = require('./binaryTree');

function breadthFirst(tree) {
  if (!tree.root) { return false; }

  let valuesOfTreeByBreadth = [];

  valuesOfTreeByBreadth.push(tree.root.value);

  let root = tree.root;
  let leftLeaf = root.left;
  let rightLeaf = root.right;


  
}
