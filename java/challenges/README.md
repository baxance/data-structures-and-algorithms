# Data Structures and Algorithms

# Language: `Java`

## Table of Contents

Challenge | Code
----------|-----
Challenge 01 | [Array Reversal](lib/src/main/java/challenges/ArrayReverse.java)
Challenge 02 | [Array Shift](lib/src/main/java/challenges/ArrayShift.java)

# Reverse an Array

## Challenge

Write a function which takes an array as an argument. Without utilizing any built-in methods return an array with elements in reversed order.

## Approach & Efficiency

Nested `for` loops, the first taking in the array of numbers and positioning each index as the last index of the empty array, and counting down from the index position with every loop through. The second loop iterates through the newly created and reverse array and prints it to the terminal.

## Solution

Whiteboarding by Matthew Simms, with Andy Agulue and Victor Sullivan
![whiteboard](/assets/ArrayReverse.PNG)

# Shift an Array

## Challenge

Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency

Create a method which takes in an array and a number. Establish the required length of the output array by taking the length of the input array and adding 1. Then find the middle index of that new array by taking that established length and dividing by 2. Then create the output array with the established length. Then iterate over the length of that output array, and with iterations above and below the middle index, insert the values of the original array, and where the index matches the middle index insert the number the method takes in as an argument.

## Solution

Whiteboarding by Barrett Nance with Matthew Simms
![whiteboard](assets/ArrayShift.jpg)
