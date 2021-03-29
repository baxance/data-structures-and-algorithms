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
//===============RECURSIVE FROM CLASS
//  public boolean includesRecursive(int val) {
//    return includesRecursive(this.head, val);
//  }
//
//  private boolean includesRecursive(Node current, int val){
//    //assuming LL is {9} -> {5} -> {7} -> null
//    // base case : we arrive at null? return false
//    // node of != null : check for match. match? return true
//    // recursion
//    if (current == null) return false;
//    if (current.val == val) return true;
//    return includesRecursive(current.next, val);
//
//
//  }

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

  public void append(int val) {
    Node currentNode = this.head;
//    int index = 0;
    while (currentNode != null){
//      index ++;
      if (currentNode.next == null){
        Node newNode = new Node(val);
        newNode.next = null;
        currentNode.next = newNode;
        return;
      }
//      System.out.println(index);
      currentNode = currentNode.next;
    }
  }

  public void insertBefore(int newVal, int val){
    Node currentNode = this.head;
    while (currentNode != null) {
//      if (currentNode.val == val) {
//        Node newNode = new Node(newVal);
//        newNode.next = currentNode.next;
//        currentNode.next = newNode;
//        return;
//      }
      if (currentNode.next.val == val) { // does the current node VAL match the input VAL?
        Node newNode = new Node(newVal); // create a new node possessing the input VAL
        newNode.next = currentNode.next; //
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next; // moves the the loop forward by 1
    }
  }

  public void insertAfter(int newVal, int val){
    Node currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.val == val) {
        Node newNode = new Node(newVal);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }
  }

}
