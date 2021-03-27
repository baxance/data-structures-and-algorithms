package challenges.linkedList;

public class LinkedList {
  public Node head;
  public Node tail;

  public LinkedList(){
    this.head = null;
    this.tail = null;
  }

  public void insert(int val) {
    Node newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    if(this.tail == null){
      this.tail = newNode;
    }
  }

  public boolean includes(int val) {
    Node currentNode = this.head;
    while (currentNode != null){
      if(currentNode.val == val){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  public String toString() {
    String str = "";
    Node currentNode = this.head;
    while (currentNode != null){
      str += "{ " + currentNode.val + " } -> ";
      currentNode = currentNode.next;
    }
    str += "NULL";
    System.out.println("STRING RESULTS: " + str);
  return str;
  }

}
