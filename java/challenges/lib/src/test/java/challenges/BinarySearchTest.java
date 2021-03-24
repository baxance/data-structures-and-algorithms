package challenges;

import org.junit.Test;
import static org.junit.Assert.*;

public class BinarySearchTest {

  @Test
  public void BinaryTest() {
    int[] arr = {1, 2, 3, 4, 5};
    int key = 4;
    int actual = BinarySearch.searchArray(arr, key);
    assertEquals(3, actual);
    key = 1;
    actual = BinarySearch.searchArray(arr, key);
    assertEquals(0, actual);
    key = -50;
    actual = BinarySearch.searchArray(arr, key);
    assertEquals(-1, actual);
  }
}
