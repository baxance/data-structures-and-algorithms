package challenges;

import org.junit.Test;
import static org.junit.Assert.*;

public class ArrayShiftTest {
  @Test
  public void insertShiftArrayTest() {
    int[] arr = {1, 2, 3, 4};
    int num = 5;
    int[] actual = ArrayShift.insertShiftArray(arr, num);
    int[] expected = {1, 2, 5, 3, 4};
    assertArrayEquals(expected, actual);
  }
}
