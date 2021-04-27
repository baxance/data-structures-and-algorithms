package challenges.blog;

public class InsertionSort {

public static int[] Insertion(int[] arr){
//  arr = new int[]{8, 4, 23, 42, 16, 15};
  for (int i = 1; i < arr.length; i++){
    int j = i-1;
    int temp = arr[i];

    while (j >= 0 && temp < arr[j]){

      arr[j + 1] = arr[j];
      j = j-1;
    }
    arr[j+1] = temp;
  }
  return arr;
}

}
