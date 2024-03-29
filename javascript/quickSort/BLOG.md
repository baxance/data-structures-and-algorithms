# Merge Sort

Given an array of `[8,4,23,42,16,15]`...

* Visually demonstrate the sorting process in the PSEUDOCODE below
* Convert the pseudocode into working code
* Present working tests

PSEUDOCODE

```javascript
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE i <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            i++
            Swap(arr, j, i)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, i + 1)
    // return the pivot index point
     return i + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

![whiteboard](./whiteboards/quick.jpg)

[Working Code](quickSort.js)

[Working Test](quickSort.test.js)
