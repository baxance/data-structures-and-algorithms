'use strict';

require('./node');

class BinaryTree {
  constructor()
  {
    this.root = null;
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
