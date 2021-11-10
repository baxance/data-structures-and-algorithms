'use strict';


const Node = require('./node');
// require('./node');

class BinaryTree {
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

  contains(node, val) {
    if (!node) return false;
    if (node.value === val) return true;
    if (node.value > val) return this.contains(node.left, val);
    return this.contains(node.right, val);
  }

  preOrder() {
    let results = [];
    this._preOrder(this.root, results);
  }
  _preOrder(node, results) {
    if (node) { results.push(node.value); }
    if (!node) { return results; }
    this._preOrder(node.left, results);
    this._preOrder(node.right, results);
    return results;
  }

  inOrder() {
    let results = [];
    this._inOrder(this.root, results);
  }
  _inOrder(node, results) {
    if (!node) { return results; }
    this._inOrder(node.left, results);
    if (node) { results.push(node.value); }
    this._inOrder(node.right, results);
    return results;
  }

  postOrder() {
    let results = [];
    this._postOrder(this.root, results);
  }
  _postOrder(node, results) {
    if (!node) { return results; }
    this._postOrder(node.left, results);
    this._postOrder(node.right, results);
    if (node) { results.push(node.value); }
    return results;
  }

  /*
    Write the following method for the Binary Tree class

    find maximum value
    Arguments: none
    Returns: number
    Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.
  */

  findMax() {
    console.log('entering findmax method');
    if (!this.root) { return null; }
    let temp = this.root.value;
    this._findMax(this.root, temp);
  }
  _findMax(node, highInteger) {
    console.log('entering _findmax recursion method. highinteger is ' + highInteger.value);

    if (node.left > highInteger) {
      highInteger = this._findMax(node.left, highInteger);
    }


    if (node && node.value > highInteger.value) {
      highInteger = node.value;
    }
    if (!node) { return highInteger.value; }
    this._findMax(node.left, highInteger.value);
    this._findMax(node.right, highInteger.value);
  }

  // _preOrder(node, results) {
  //   if (node) { results.push(node.value); }
  //   if (!node) { return results; }
  //   this._preOrder(node.left, results);
  //   this._preOrder(node.right, results);
  //   return results;
  // }

  // preOrder(node) {
  //   let results = [];
  //   if (node) results.push(node.value);
  //   if (node === null) return results;
  //   console.log(results);
  //   // console.log(node.value);

  //   this.preOrder(node.left);
  //   this.preOrder(node.right);
  // }

  // inOrder(node) {
  //   let results = [];
  //   results.push(node.value);
  //   if (node === null) return results;

  //   this.inOrder(node.left);
  //   console.log(node.value);
  //   this.preOrder(node.right);
  // }

  // postOrder(node) {
  //   let results = [];
  //   results.push(node.value);
  //   if (node === null) return results;

  //   this.inOrder(node.left);
  //   this.preOrder(node.right);
  //   console.log(node.value);
  // }

}

module.exports = BinaryTree;
