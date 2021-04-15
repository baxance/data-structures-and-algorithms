package challenges.tree;

import java.util.ArrayList;

public class Tree<T> {
  public Node<T> root;

  public Tree(){
    this.root = null;
  }
  public Node<T> getRoot() {
    return root;
  }
  public void setRoot(Node<T> root) {
    this.root = root;
  }

  public void preorder(){
    this._preOrder(this.root, new ArrayList<T>());

  }
  public ArrayList<T> _preOrder(Node<T> recursingNode, ArrayList<T> results){
//    ArrayList<T> results = new ArrayList<>();
    if (recursingNode == null){
      return results;
    }
    results.add(recursingNode.getValue());
    this._preOrder(recursingNode.getLeft(), results);
    this._preOrder(recursingNode.getRight(), results);
    return results;
  }

  public void inOrder(){
    this._inOrder(this.root, new ArrayList<T>());
  }
  public ArrayList<T> _inOrder(Node<T> recursingNode, ArrayList<T> results){
    if (recursingNode == null){
      return results;
    }
    this._inOrder(recursingNode.getLeft(), results);
    results.add(recursingNode.getValue());
    this._inOrder(recursingNode.getRight(), results);
    return results;
  }


  public void postOrder(){
    this._postOrder(this.root, new ArrayList<T>());
  }
  public ArrayList<T> _postOrder(Node<T> recursingNode, ArrayList<T> results){
    if (recursingNode == null){
      return results;
    }
    this._postOrder(recursingNode.getLeft(), results);
    this._postOrder(recursingNode.getRight(), results);
    results.add(recursingNode.getValue());
    return results;
  }

}
