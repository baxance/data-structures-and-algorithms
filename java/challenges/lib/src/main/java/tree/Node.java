package tree;

public class Node {
  public Object val;
  public Node left;
  public Node right;

  public Node(Object val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
