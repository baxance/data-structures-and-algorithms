package challenges;

import java.util.Arrays;

public class BinarySearch {

  public static int searchArray(int[] arr, int key) {
//    System.out.println("INPUT ARRAY: " + Arrays.toString(arr));
//    System.out.println("INPUT KEY: " + key);
    int low = 0;
    int high = arr.length - 1;
//    System.out.println("HIGH NUMBER: " + high);
//    System.out.println("MID NUMBER: " + mid);

    while (low <= high) {
      int mid = (low + high) / 2;
      if (key == arr[mid]){
       return mid;
      }
      else if (key > arr[mid]){
        low = (mid + 1);
      }
      else {
        high = (mid - 1);
      }
    }
    return -1;
  }
}
