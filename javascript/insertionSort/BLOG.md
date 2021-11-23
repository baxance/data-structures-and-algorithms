# Insertion Sort

Given an array of `[8,4,23,42,16,15]` show visually the sorting process given the pseudocode below.

``` javascript
  InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp


  for (let i = 1; i<arr.length;i++){
    let j = i-1;
    let temp = arr[i];

    while (j >= 0 || temp < arr[j]) {
      arr{j + 1} = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
```

![whiteboard](./whiteboards/insertionSort.jpg)

Iterate through the input array for as many indexes there are in the array, with the pointer starting at the second index. Within the loop create two variables. One, `j` holding the value of the pointer - 1. The second, `temp` holding the value of the pointer. `While` the value `j` is greater than or equal to zero AND the temp value is less than the value at the `j` index of the input array we want to set the index at `j` + 1 to be the value at `j`, then subtract 1 from `j` and exit or re-enter the while loop depending on the conditionals. When exiting the while-loop (back into the end of the for-loop) set the value at the index of `j` + 1 to be that which the `temp` variable is holding.

Code:

```javascript
  for (let i = 1; i<arr.length;i++){
    let j = i-1;
    let temp = arr[i];

    while (j >= 0 || temp < arr[j]) {
      arr{j + 1} = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
```
