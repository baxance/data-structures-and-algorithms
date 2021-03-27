package challenges.linkedList;

import org.junit.Test;
import static org.junit.Assert.*;

public class LinkedListTest {

  // Test 1
  @Test
  public void emptyListTest() {
    LinkedList test1 = new LinkedList();
    LinkedList base1 = new LinkedList();
    Node expected1 = null;
    Node actual1 = test1.head;
    assertEquals("should return a null value for head", expected1, actual1);
  }

  //Test 2
  @Test
  public void insertTest() {
    LinkedList test2 = new LinkedList();
    test2.insert(1775);
    int expected = 1775;
    int actual = test2.head.val;
    assertEquals("insert 1775", expected, actual);
  }

  //Test 3
  @Test
  public void multipleTest() {
    LinkedList test = new LinkedList();
    test.insert(1775);
    int expected = 1775;
    int actual = test.head.val;
    test.insert(2021);
    int expected2 = 2021;
    int actual2 = test.head.val;
    assertEquals("insert 1775", expected, actual);
    assertEquals("insert 2021", expected2, actual2);
  }

  //Test 4
  @Test
  public void headTest() {
    LinkedList test = new LinkedList();
    test.insert(4);
    test.insert(3);
    test.insert(2);
    test.insert(1);
    int expected = 1;
    int actual = test.head.val;
    assertEquals("head is 1", expected, actual);
  }

  //Test 5
  @Test
  public void includesTest() {
    LinkedList test3 = new LinkedList();
    test3.insert(200);
    test3.insert(300);
    test3.insert(400);
    test3.insert(500);
    test3.insert(100);
    boolean thing = test3.includes(100);
    assertTrue("looking for 100", thing);
  }

  //Test 6
  @Test
    public void excludesTest(){
    LinkedList test4 = new LinkedList();
    test4.insert(200);
    test4.insert(300);
    test4.insert(400);
    test4.insert(500);
    test4.insert(600);
    boolean thing2 = test4.includes(100);
    assertFalse("looking for 100", thing2);
  }

  //Test 7
  @Test
  public void stringTest() {
    LinkedList test5 = new LinkedList();
    test5.insert(3);
    test5.insert(2);
    test5.insert(1);
    String expected = "{ 1 } -> { 2 } -> { 3 } -> NULL";
    String actual = test5.toString();
    assertEquals(expected, actual);
  }

}
