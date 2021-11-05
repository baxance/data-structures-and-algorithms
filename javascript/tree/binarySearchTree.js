'use strict';

const Node = require('./node');
require('./binaryTree');

class BinarySearchTree {
  constructor()
  {
    this.root = null;
  }

  add(value) {

    let newNode = new Node(value);
    if (!this.root) {this.root = newNode;}
    else this.addNode(this.root, newNode);
  }

  addNode(node, newNode) {

    if (newNode.value < node.value) {
      if (!node.left) {node.left = newNode;}
      else this.addNode(node.left, newNode);
    } else {
      if(!node.right) {node.right = newNode;}
      else this.addNode(node.right, newNode);
    }
  }

  /*
  add() currently producing with test3....
  tree.root = 1
  tree.add 2
  tree.add 3
    1
    /\
      2
      /\
        3

  Tree being created correctly, but moving linearly from 1 there's no other way for the nodes to be arranged with the current logic

  add() currently producing with test3 conditions and inputs....
  tree.root = 5
  tree.add 4
  tree.add 6
    5
    /\
   4  6
  */

  contains(node, val) {
    if (!node) return false;
    if (node.value === val) return true;
    if (node.value > val) return this.contains(node.left, val);
    return this.contains(node.right, val);
  }
}

module.exports = BinarySearchTree;

