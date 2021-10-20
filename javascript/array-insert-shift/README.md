# Insert to Middle of an Array

Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Example

| Input | Output |
| ----- | ------ |
| [2,4,6,-8], 5 | [2,4,5,6,-8] |
| [42,8,15,23,42], 16 | [42,8,15,16,23,42] |

## Whiteboard Process

![Insert to Middle of an Array](/whiteboards/insertshift.jpg)

## Approach & Efficiency

I went with a two-pointer method. First pointer being `i` iterating through the array and the second (`j`) created independently that increases by 2 for every loop through the array. A `false` boolean variable is created. A new array is created that accepts the `push` values from the input as the loop progresses. When the value of `j` becomes greater than the length of the input array the input value is pushed into the new array. The boolean is flagged as true, halting the execution of the incrementation or pushing of the input value. The loop continues as usual, pushing the values of the input array on top of the input value.