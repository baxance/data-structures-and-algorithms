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
  @Test
  public void insertShiftArrayTest2() {
    int[] arr = {11, 222, 345, 4659, 698301, 7802759};
    int num = 50592;
    int[] actual = ArrayShift.insertShiftArray(arr, num);
    int[] expected = {11, 222, 345, 50592, 4659, 698301, 7802759};
    assertArrayEquals(expected, actual);
  }
  @Test
  public void insertShiftArrayTest3() {
    int[] arr = {1};
    int num = 2;
    int[] actual = ArrayShift.insertShiftArray(arr, num);
    int[] expected = {1, 2};
    assertArrayEquals(expected, actual);
  }
}
