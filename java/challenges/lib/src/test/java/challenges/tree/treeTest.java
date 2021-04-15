package challenges.tree;

import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;

public class treeTest<T> {

  @Test
  public void nullTreeTest(){
    Tree test = new Tree();
    Assert.assertNull(test.root);
  }

  @Test
  public void rootTreeTest(){
    Tree test = new Tree();
    Node testing = new Node<>("string");
    test.setRoot(testing);
    System.out.println(test.root.toString());
    Assert.assertNotNull(test.root);
  }

  @Test
  public void leftRightTree(){
    Node test = new Node<>(42);
    Node<String> test2 = new Node<>("42");
    test.setLeft(test2);
    Node rightTest = new Node<>(12);
    test.setRight(rightTest);
    System.out.println(test.toString());
  }

  @Test
  public void preOrderTest(){
    ArrayList<T> results = new ArrayList<T>();
    Tree testTree = new Tree();
    Node<Integer> test = new Node<>(0);
    Node<Integer> testNode1 = new Node<>(1);
    Node<Integer> testNode2 = new Node<>(2);
    Node<Integer> testNode3 = new Node<>(3);
    Node<Integer> testNode4 = new Node<>(4);
    testTree.setRoot(test);
    test.setLeft(testNode1);
    testNode1.setRight(testNode2);
    testNode1.setLeft(testNode3);
    testNode2.setRight(testNode4);
    System.out.println(testTree._preOrder(test, results));
  }

  @Test
  public void inOrderTest(){
    ArrayList<T> results = new ArrayList<T>();
    Tree testTree = new Tree();
    Node<Integer> testNode1 = new Node<>(1);
    testTree.setRoot(testNode1);
    Node<Integer> testNode2 = new Node<>(2);
    testNode1.setLeft(testNode2);
    Node<Integer> testNode3 = new Node<>(3);
    testNode1.setRight(testNode3);
    Node<Integer> testNode4 = new Node<>(4);
    testNode2.setRight(testNode4);
    Node<Integer> testNode5 = new Node<>(5);
    testNode2.setLeft(testNode5);
    Node<Integer> testNode6 = new Node<>(6);
    testNode5.setLeft(testNode6);
    System.out.println(testTree._inOrder(testNode1, results));
  }

  @Test
  public void postOrderTest(){
    ArrayList<T> results = new ArrayList<T>();
    Tree testTree = new Tree();
    Node<Integer> testNode1 = new Node<>(1);
    testTree.setRoot(testNode1);
    Node<Integer> testNode2 = new Node<>(2);
    testNode1.setLeft(testNode2);
    Node<Integer> testNode3 = new Node<>(3);
    testNode1.setRight(testNode3);
    Node<Integer> testNode4 = new Node<>(4);
    testNode2.setRight(testNode4);
    Node<Integer> testNode5 = new Node<>(5);
    testNode2.setLeft(testNode5);
    Node<Integer> testNode6 = new Node<>(6);
    testNode5.setLeft(testNode6);
    System.out.println(testTree._postOrder(testNode1, results));


  }

}
