package challenges.stacksandqueues;

import org.junit.Test;
import java.util.EmptyStackException;
import java.util.NoSuchElementException;

import static org.junit.Assert.*;

public class StacksAndQueuesTest {


  @Test //cc10 test 1
  public void pushStackTest() {
    Stack test = new Stack();
    test.push(10);
    Object expected = 10;
    Object actual = test.top.val;
    System.out.println("TOP: " + test.top.val);
    assertEquals(expected, actual);
  }

  @Test //cc10 test 2, 3, 4, 7
  public void popStackTest() {
    Stack test = new Stack();
    test.push(4);
    test.push(5);
    test.push(6); // <- should pop this one
    test.push(7);
    test.pop();
    Object expected = 6;
    Object actual = test.pop();
    assertEquals(expected, actual);
    Stack emptyTest = new Stack();
    emptyTest.push(1);
    emptyTest.push(2);
    emptyTest.pop();
    emptyTest.pop();
    assertThrows(EmptyStackException.class, ()->{emptyTest.pop();});

  }

  @Test //cc10 test 5, 7
  public void peekTest() {
    Stack test = new Stack();
    test.push(1);
    test.push(2);
    test.push(3);
    Object expected = 3;
    Object actual = test.peek();
    assertEquals(expected, actual);
    Stack emptyTest = new Stack();
    test.push(1);
    test.push(2);
    test.pop();
    test.pop();
    assertThrows(EmptyStackException.class, ()->{emptyTest.peek();});
  }

  @Test
  public void isEmpty(){
    Stack test = new Stack();
    test.push(1);
    test.push(2);
    test.pop();
    test.pop();
    Object expected = true;
    Object actual = test.isEmpty();
    assertEquals(expected, actual);
  }

  @Test //cc10 test 6
  public void emptyStackTest() {
    Stack test = new Stack();
    Node expected = null;
    Node actual = test.top;
    assertEquals("should return a null val for top", expected, actual);
  }



//======================QUEUE==========================//



  @Test //cc10 test 8, 9
  public void enqueueTest() {
    Queue test = new Queue();
    test.enqueue(3); // <- should be FRONT
    test.enqueue(2);
    test.enqueue(1); // <- should be REAR
    Object expected = 1;
    Object actual = test.rear.val;
    System.out.println(test.rear.val); // is 1
    System.out.println(test.front.val);
    assertEquals(expected, actual);
  }

  @Test //cc10 test 10, 14
  public void dequeueTest() {
    Queue test = new Queue();
    test.enqueue(3);
    test.enqueue(2);
    test.enqueue(1);
    test.dequeue();
    test.dequeue();
    Object expected = 1;
    Object actual = test.dequeue();
    assertEquals(expected, actual);

    Queue emptyTest = new Queue();
    emptyTest.enqueue(1);
    emptyTest.dequeue();
    assertThrows(NoSuchElementException.class, ()-> {emptyTest.dequeue();});
  }

  @Test //cc10 test 11, 12, 14
  public void queuePeekTest() {
    Queue test = new Queue();
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);
    Object expected = 1;
    Object actual = test.peek();
    assertEquals(expected, actual);

    Queue emptyTest = new Queue();
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);
    test.dequeue();
    test.dequeue();
    test.dequeue();
    assertThrows(NoSuchElementException.class, ()-> {emptyTest.peek();});

    Queue emptiedTest = new Queue();
    test.enqueue(1);
    test.dequeue();
    assertThrows(NoSuchElementException.class, ()-> {emptiedTest.peek();});
  }


  @Test //cc10 test 13
  public void emptyQueue() {
    Queue empty = new Queue();
    Node expected = null;
    Node actual = empty.front;
    assertEquals(expected, actual);
  }

  }
