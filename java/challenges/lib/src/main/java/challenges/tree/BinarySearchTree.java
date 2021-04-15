package challenges.tree;

public class BinarySearchTree<T> {
  public Node<T> root;

  public BinarySearchTree(){
    this.root = null;
  }
  public Node<T> getRoot() {
    return root;
  }
  public void setRoot(Node<T> root) {
    this.root = root;
  }

  public void add(Node<T> val){
    if (this.root == null){
      this.root = new Node(val);
    }
    while (true){


    }

  }

}
