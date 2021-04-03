package challenges.stacksandqueues;

import java.util.EmptyStackException;
import java.util.NoSuchElementException;

public class Queue {
  public Node front;
  public Node rear;

  public Queue(){
    this.front = null;
    this.rear = null;
  }

  public void enqueue(Object val) {
    Node newNode = new Node(val);
    if (isEmpty()) {
      front = newNode;
    } else {
      rear.next = newNode;
    }
    rear = newNode;
  }

  public Object dequeue(){
    if(front == null){
      throw new NoSuchElementException();
    }
    Node temp = front;
    front = front.next;
    temp.next = null;

    return temp.val;
  }

  public Object peek(){
    if(front == null){
      throw new NoSuchElementException();
    }
    return front.val;
  }

  public boolean isEmpty(){
    return front == null;
  }

}
