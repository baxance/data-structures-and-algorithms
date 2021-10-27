# Singly Linked List

Basic implementation of a Linked List data structure.

## Challenge

Create a Node class and a Linked List class that contains methods to:

* Insert a value to the Head of the LL
* Check if the LL Includes a specific value
* Convert all Node values of a LL into a formatted String
* Append a new Node to the end of the LL
* Insert a new Node before a target Node's value
* insert a new Node after a target Node's value

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

### Append

* Create a new Node holding the input
* iterate through the LL `while` the next node in line is not null
* when the next node in line is Null, assign the new Node to take it's place

### insertBefore

* Create a new Node holding the input of the new value, and a variable functioning as a pointer
* if the Head node is the target input, make the head the `next` Node after the new Node and assign the new Node as the `head`
* iterate through the LL while the current node is not null
* if the next node in line matched the target input and isn't null then set it to be the `next` Node in line after the new Node

### insertAfter

* create a new Node holding the input of the new value and a variable functioning as a pointer
* iterate through the LL for as long as the current node is not null
* if the current node's value is the target input then set the new Node to be the `next` node in line after

### kthFromEnd

  I took what is probably an inefficient approach. First counting the amount of Nodes in the LL, then taking the difference between the amount of Nodes and the input value of `k`. I iterate through the LL again starting at the head, decrementing from that difference until it reaches zero, at which point I've landed at `k` nodes from the last node in the LL.

* Check first if `k` is less than zero, which would return null anyway
* Create a counter variable starting at 0 and a pointer variable looking at the `head` of the LL
* iterate through the LL `while` as the pointer is not null, and increment the counter by 1 for every iteration

> * if the next value in the LL is null and the value of `k` is `0` then return the value of the pointer, since we've found it's target

* upon exiting the iteration check `if` the counter and `k` are equal, and return null if so
* create a new counter variable that is the difference between the earlier counter and the value of `k`
* check `if` that new counter is less than 0, and return null if so
* reset the pointer to be looking at the `head` of the LL again
* check `if` that new counter is greater than zero, if it is:

> * set the pointer to be the next Node, and decrement from the new counter
> * when the value of the new counter becomes zero, return the value of the pointer

[Back to Table of Contents](../README.md)
