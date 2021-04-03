package challenges.stacksandqueues;

import java.util.EmptyStackException;
import java.util.*;

public class Stack {
  public Node top;

  public Stack(){
    this.top = null;
  }

  public void push(Object val){
    Node newNode = new Node(val);
    newNode.next = top;
    top = newNode;
  }

  public Object pop(){
    if (top == null){
      throw new EmptyStackException();
    }
    Node temp = top;
    top = top.next;
    temp.next = null;
    return temp.val;
  }

  public Object peek(){
    if (top == null){
      throw new EmptyStackException();
    }
    return top.val;
  }

  public boolean isEmpty(){
    return top == null;
  }


}
