package challenges.blog;

import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.assertArrayEquals;

public class InsertionSortTest {

  @Test
  public void InsertionTest(){
    int[] test = new int[]{8, 4, 23, 42, 16, 15};
    int[] expected = {4, 8, 15, 16, 23, 42};
    int[] actual = InsertionSort.Insertion(test);
    System.out.println(Arrays.toString(InsertionSort.Insertion(test)));
    assertArrayEquals(expected, actual);
  }

  @Test
  public void InsertionTestFailure(){
    int[] test = new int[]{8, 4, 23, 42, 16, 15};
    int[] expected = {4, 8, 15, 16, 23, 42};
    int[] actual = InsertionSort.Insertion(test);
    System.out.println(Arrays.toString(InsertionSort.Insertion(test)));
    assertArrayEquals(expected, actual);
  }


}
