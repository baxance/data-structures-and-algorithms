# Binary search in a sorted 1D array

Write a function called `BinarySearch` which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

## Example

| Input | Output |
| ----- | ------ |
| [4, 8, 15, 16, 23, 42], 15 | 2 |
| [-131, -82, 0, 27, 42, 68, 179], 42 | 4 |
[11, 22, 33, 44, 55, 66, 77], 90| -1
[1, 2, 3, 5, 6, 7], 4 | -1

## Whiteboard Process

![Insert to Middle of an Array](/whiteboards/binarysearch.jpg)

## Approach & Efficiency

The approach was pretty set in stone, since we could only use the binary search method. So my approach was straightforward, creating high/low parameters initially based upon the index range of the input array. Find the sum of those parameters then divide by 2 for the half. Use that quotient to look into the array at that index and check if it matches the search key, and narrowing the high/low parameters accordingly if the value at that index is greater or less than the search key.

Since I am not creating any arrays of my own I believe my Space efficiency is Constant O(1) and my time will increase Linearly depending on the size of the sorted array given my Time efficiency is O(n)
