# Singly Linked List

Basic implementation of a Linked List data structure.

## Challenge

Create a Node class and a Linked List class that contains methods to Insert a value to the Head of the LL, to check if the LL Includes a specific value, and a method to convert all Node values of a LL into a formatted String

## Approach & Efficiency

### Insert

* Create a new Node holding the input value
* Assign that new Node's `next` value to be the `head` of the Linked List
* set the `head` value of the LL to be the new Node

### Includes

* Assign a `current` variable to temporarily hold the value of a Node, starting with the `head` of the LL
* Iterate through the LL in a While-Loop, under the condition that the `current` node exises (!== null)
* if the value of the `current` variable matches the inpute value, returns True
* if not, the `current` variable is set to the `next` value in the LL
* if a match is not found and the `next` node of the LL is null, return false

### toString

* instantiate an empty string that I can continuously add to
* create a pointer variable initially pointing at the `head` of the LL
* Iterate through the LL in a While-Loop, under the condition that the `current` node exises (!== null)
* On each iteration, adding the value of the current node to a specific string format and inserted into the empty string
* when the loop breaks (current node is null) add `'NULL'` to the end of the string and return the string

## API

I don't see what I can say differently here from Approach/Efficiency.
