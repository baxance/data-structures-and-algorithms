# Singly Linked List

Basic implementation of a Linked List data structure.

[Code](../linked-list/index.js)

## Challenge

Create a Node class and a Linked List class that contains methods to:

* Insert a value to the Head of the LL
* Check if the LL Includes a specific value
* Convert all Node values of a LL into a formatted String
* Append a new Node to the end of the LL
* Insert a new Node before a target Node's value
* insert a new Node after a target Node's value

## Approach & Efficiency

## Insert

* Create a new Node holding the input value
* Assign that new Node's `next` value to be the `head` of the Linked List
* set the `head` value of the LL to be the new Node

## Includes

* Assign a `current` variable to temporarily hold the value of a Node, starting with the `head` of the LL
* Iterate through the LL in a While-Loop, under the condition that the `current` node exises (!== null)
* if the value of the `current` variable matches the inpute value, returns True
* if not, the `current` variable is set to the `next` value in the LL
* if a match is not found and the `next` node of the LL is null, return false

## toString

* instantiate an empty string that I can continuously add to
* create a pointer variable initially pointing at the `head` of the LL
* Iterate through the LL in a While-Loop, under the condition that the `current` node exises (!== null)
* On each iteration, adding the value of the current node to a specific string format and inserted into the empty string
* when the loop breaks (current node is null) add `'NULL'` to the end of the string and return the string

## Append

* Create a new Node holding the input
* iterate through the LL `while` the next node in line is not null
* when the next node in line is Null, assign the new Node to take it's place

## insertBefore

* Create a new Node holding the input of the new value, and a variable functioning as a pointer
* if the Head node is the target input, make the head the `next` Node after the new Node and assign the new Node as the `head`
* iterate through the LL while the current node is not null
* if the next node in line matched the target input and isn't null then set it to be the `next` Node in line after the new Node

## insertAfter

* create a new Node holding the input of the new value and a variable functioning as a pointer
* iterate through the LL for as long as the current node is not null
* if the current node's value is the target input then set the new Node to be the `next` node in line after

## kthFromEnd

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

## zipLists

## Whiteboard Process

![zipped linked lists](./whiteboards/ZipLL.jpg)

```javascript
  Example:
  Linked List 1: { 1 } -> { 3 } -> { 5 } -> NULL
  Linked List 2: { 2 } -> { 4 } -> { 6 } -> NULL
  Output Linked List: { 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL
```

  I created two pointers, each pointing to the `head` of each input Linked List (LL). Also created a variable to temporarily hold node values, initially holding the first pointer. The core logic is trading, replacing and skipping `while` neither pointer is null.
  
* The temp variable holds the `next` value of the first pointer, in this case `3`
* The first pointer's `next` is replaced by the second pointer's value of `2`
* the second pointer assumes the value of it's `next` node
* The first pointer looks two (`.next.next`) places and assigns the value of that node to be that of the temp variable, `3`. The first Linked List now looks like this: `{ 1 } -> { 2 } -> { 3 } -> { 5 }`
* before restarting the loop the first pointer's is reassigned to look two spaces ahead, in this case `3`
* when the loop restarts the temp will look ahead of that pointer to `5`, store it, replace it with the value from the second pointer (`4`), and set that node's `next` to be the value stored by the Temp.

Edge Cases

* If one of the LL args are null
  * the other LL is returned intact
* If the second LL is larger than the first
  * Logic continues as above until the first pointer reads null but the second does not. First (and shorter) LL has the second pointer's value `append`ed to it, borrowing an earlier method.
  * second pointer moves forward to it's `next` value and the conditional executes a `continue` to avoid the remainder of the logic and restart the loop
* If the first LL is larger than the second
  * Logic continues as above until the second pointer reads null but the first does not. Since the changes are all made to the first LL then the trailing nodes are already in the right place. First LL is returned in it's current half-zipped state.

[Back to Table of Contents](../README.md)
