# Data Structures and Algorithms

# Language: `Java`

## Table of Contents

Challenge | Code
----------|-----
Challenge 01 | [Array Reversal](lib/src/main/java/challenges/ArrayReverse.java)
Challenge 02 | [Array Shift](lib/src/main/java/challenges/ArrayShift.java)
Challenge 03 | [Binary Search](lib/src/main/java/challenges/BinarySearch.java)
Challenge 05 | [Linked List](lib/src/main/java/challenges/linkedList/LinkedList.java)


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

# Binary Search

## Challenge

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency

Created a method which takes as input a sorted `array` of ints, and an int `key` to be used as a search term.
Method instantiates a `low` value of 0 and a `high` value created from the length of the `input array -1`
Created `while loop` that runs while the `low` number is less than or equals to the `high` number. upon each iteration of the loop a `mid` point is calculated by summing the `low` and `high` values and dividing them by 1. Next it checks if the input `key` is equal to the value at the `mid` position of the input `array`. If so, the loop ends and that mid position value is returned. If not, the loop checks if the `key` is greater than the value at the `mid` position of the `array`. If so, it changes the `low` value by +1 to it and reiterating the loop. Otherwise the high value has it's value set to the mid value -1. If the key never finds it's match in the loop, it exits and returns -1.

## Solution

Whiteboarding by Matthew Simms with Matthew Simms
![whiteboard](assets/BinarySearch.PNG)

# Singly Linked List

## Challenge

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node. Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

- Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

## Approach & Efficiency

I have absolutely no clue about the space/time efficiency in any aspect. I don't remember covering it in class, and I guess that's my home work for the weekend.

## API
<!-- Description of each method publicly available to your Linked List -->
- Insert method that receives an int as input. Creates a new node at the position of head that carries the input value. If statement checks if the tail position is null, and if so creates another head in the list and assigns it a the value.
- Includes method takes in an int, and loops for as long as the current node is null. If the input value matches the value of the current node then the method returns true. If not, the loop tests the next node in the list. When the loop runs out of nodes to check and has not found it's match it returns false.
- toString method takes in no arguments. It creates an empty string to serve as a vessel, and loops through the nodes in the list and adds the node values along with string concatenation for formatting to the empty string , and then returns the now filled string.
