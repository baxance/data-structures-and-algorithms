public class ArrayReverse {
  public static void main(String[] args){
    int[] arr = {1, 2, 3, 4, 5, 6, 7, 8};
    int[] tempArr;
    tempArr = new int[8];
    for (int i = 0; i < arr.length; i++){
      int j = arr.length-i-1;
      tempArr[j] = arr[i];
      }
      for(int i = 0; i < tempArr.length; i++){
        System.out.println(tempArr[i]);
      }
    }
}