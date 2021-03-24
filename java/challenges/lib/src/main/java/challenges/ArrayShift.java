package challenges;

public class ArrayShift {
  public static int[] insertShiftArray(int[] arr, int num) { // array of numbers and an additional number
    int arrayLengthOut = (arr.length + 1); //establish the length of the output array
    int index = (arrayLengthOut / 2); //find the middle position of input array
    int[] outputArray = new int[arrayLengthOut]; //create output array with length = input array +1
    for (int i = 0; i < outputArray.length; i++) {
      if (i < index) {
        outputArray[i] = arr[i];
      } else if (i == index) {
        outputArray[i] = num;
      } else if (i > index) {
        outputArray[i] = arr[i-1];
      }
      System.out.println("finished output array: " + outputArray[i]);
    }
    System.out.println("input array length: " + arr.length);
    System.out.println("output array length: " + arrayLengthOut);
    System.out.println("output array center index: " + index);
    System.out.println("output array positions: " + outputArray.length);
    System.out.println("input array at position 2: " + arr[2]);
    return outputArray;
    }
  }
