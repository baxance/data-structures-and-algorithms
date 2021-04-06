package challenges.utilities;

import org.checkerframework.checker.units.qual.A;
import org.junit.Test;
import static org.junit.Assert.*;

public class AnimalShelterTest {

  @Test
  public void enqueueAnimalTest() throws Exception {
  AnimalShelter test = new AnimalShelter();
  test.enqueueAnimal("dog");
  test.enqueueAnimal("dog");
  test.enqueueAnimal("cat");
    System.out.println(test.catQueue.front.val);
    System.out.println(test.dogQueue.front.val);
  Object expected = "cat";
  Object actual = test.catQueue.front.val;
  assertEquals(expected, actual);
  AnimalShelter testPig = new AnimalShelter();
  assertThrows(Exception.class, ()-> {testPig.enqueueAnimal("pig");});
  }

  @Test
  public void dequeueAnimalTest() throws Exception {
    AnimalShelter test = new AnimalShelter();
    test.enqueueAnimal("dog");
    test.enqueueAnimal("dog");
    test.enqueueAnimal("cat");
    test.enqueueAnimal("dog");
    test.enqueueAnimal("cat");
    Object expected = "dog";
    Object actual = test.dequeueAnimal("dog");
    assertEquals(expected, actual);
    AnimalShelter testNull = new AnimalShelter();
    test.enqueueAnimal("dog");
    test.enqueueAnimal("dog");
    test.enqueueAnimal("cat");
    test.enqueueAnimal("dog");
    test.enqueueAnimal("cat");
    Object expectedNull = null;
    Object actualNull = testNull.dequeueAnimal("pig");
    assertEquals(expectedNull, actualNull);
  }
}
