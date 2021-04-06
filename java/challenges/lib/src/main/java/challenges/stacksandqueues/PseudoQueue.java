package challenges.stacksandqueues;

import java.util.NoSuchElementException;

public class PseudoQueue {
  public Node top;
  Stack stackOne;
  Stack stackTwo;

  public PseudoQueue(){
    this.top = null;
    stackOne = new Stack();
    stackTwo = new Stack();
  }

  public void pseudoEnqueue(Object val){
      stackOne.push(val);
    }

  public Object pseudoDequeue(){
    Object val;
    if (stackTwo.top == null){
      if (stackOne.top == null){
        throw new NoSuchElementException();
      } else {
        while (stackOne.top != null){
          stackTwo.push(stackOne.pop());
        }val = stackTwo.pop();
      }
    } else {
      val = stackTwo.pop();
    }return val;
  }
  // review: just enqueue everything into stack one, and dequeue in stack 2 only. Stack 1 only pushes into 2
  // when 2 is empty.

}
