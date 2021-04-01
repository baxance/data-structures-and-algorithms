package challenges.linkedList;

public class LinkedList {
  public Node head;
  public Node tail;

  public LinkedList() {
    this.head = null;
    this.tail = null;
  }

  public void insert(int val) {
    Node newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    if (this.tail == null) {
      this.tail = newNode;
    }
  }

  public boolean includes(int val) {
    Node currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.val == val) {
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
    while (currentNode != null) {
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
    while (currentNode != null) {
//      index ++;
      if (currentNode.next == null) {
        Node newNode = new Node(val);
        newNode.next = null;
        currentNode.next = newNode;
        return;
      }
//      System.out.println(index);
      currentNode = currentNode.next;
    }
  }

  public void insertBefore(int newVal, int val) {
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

  public void insertAfter(int newVal, int val) {
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

  public int valFromEnd(int k) {
    Node current = this.head;
    int counter = 1;
    while (current != null) {
      System.out.println("1) COUNTER: " + counter);
//      System.out.println("2) COUNTER - " + k + ": " + (counter - k - 1));
      System.out.println("3) NODE VALUE: " + current.val);
      counter++;
      if (k < 0) {
        System.out.println("argument out of bounds");
        return 0;
      }
      current = current.next;
    }
    int target = (counter - k + 1);
    System.out.println("TARGET: " + target);
    int targetCounter = 1;
    Node current2 = this.head;
    while (current2 != null) {
      System.out.println("CURRENT2 VAL: " + current2.val);
      targetCounter++;
      if (target == targetCounter) {
        System.out.println(current2.val);
        return current2.val;
      }
      else if (target == 0) {
        return current2.val;
      }
      current2 = current2.next;
    }
    System.out.println(k + " from the end is unreachable...");
    return  0 ;
  }

  public static LinkedList zipLists(LinkedList one, LinkedList two) {
    if (one == null){
      return two;
    }
    if (two == null){
      return one;
    }
    Node current1 = one.head;
    Node current2 = two.head;
    Node holder;
    while (current1 != null) {
      holder = current1.next;
      current1.next = current2;
      current1.next.next = holder;
      current1 = current1.next.next;
      current2 = current2.next;
    }
    return one;
  }


}

