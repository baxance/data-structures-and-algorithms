# Stacks and Queues
<!-- Short summary or background information -->
Basic implementation of the Stack and Queue data structures.

[Stack](../stackAndQueue/stack.js)
[Queue](../stackAndQueue/queue.js)
[PseudoQueue](../stackAndQueue/pseudoQueue.js)

## Challenge

### Node

Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

### Stack

Create a Stack class that has a top property. It creates an empty Stack when instantiated.

The class should contain the following methods:

* push
  * Arguments: value
  * adds a new node with that value to the top of the stack with an O(1) Time       performance.

* pop
  * Arguments: none
  *Returns: the value from node from the top of the stack
  * Removes the node from the top of the stack
  * Should raise exception when called on empty stack

* peek
  * Arguments: none
  * Returns: Value of the node located at the top of the stack
  * Should raise exception when called on empty stack

* is empty
  * Arguments: none
  * Returns: Boolean indicating whether or not the stack is empty.

### Queue

Create a Queue class that has a front property. It creates an empty Queue when instantiated.

The class should contain the following methods:

* enqueue
  * Arguments: value
  * adds a new node with that value to the back of the queue with an O(1) Time performance.

* dequeue
  * Arguments: none
  * Returns: the value from node from the front of the queue
  * Removes the node from the front of the queue
  * Should raise exception when called on empty queue

* peek
  * Arguments: none
  *Returns: Value of the node located at the front of the queue
  *Should raise exception when called on empty stack

* is empty
  * Arguments: none
  * Returns: Boolean indicating whether or not the queue is empty

### PseudoQueue

Create a new class called pseudo queue that does not use an existing Queue data structure, but implements queue methods using two Stacks.

The class should contain the following methods:

* enqueue
  * Arguments: value
  * Inserts value into the PseudoQueue, using a first-in, first-out approach.

* dequeue
  * Arguments: none
  * Extracts a value from the PseudoQueue, using a first-in, first-out approach.h

### Animal Shelter

Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.

Implement the following methods:

* enqueue
  * Arguments: animal
  * animal can be either a dog or a cat object.

* dequeue
  * Arguments: pref
  * pref can be either "dog" or "cat"
  * Return: either a dog or a cat, based on preference.
  * If pref is not "dog" or "cat" then return null.

  > * Stretch Goal: If a cat or dog isn’t preferred, return whichever animal has been waiting in the shelter the longest.

## Approach & Efficiency

### PseudoQueue

For the enqueue method I first check if there's anything in the second stack (s2) and if so begin the process of up-ending it into stack one (s1) until it's empty by `pushing` with the value being `popped` off of s2. Once it's empty (or if it was empty from the start) I simply push the arg value into s1.

For the dequeue method I entertain a couple of checks. If both stacks are empty I return something saying as much. if only s2 is empty then `while` s1 is not empty i iterate through it. i assign the `top.next` of s1 to a temp variable, then `push` into s2 with the value i `pop` from s1, then assign that temp variable to be the new head of the stack, then repeat until s1 is null.
Then I pop from s2, with it's top value being the First value Into s1, and now the First being popped Out of s2. FIFO respected.

Of course if S1 is empty and s2 isn't then I can just pop out of S2 with no need for all the other shenanigans.

![pseudoqueue](/whiteboards/pseudoQueue.jpg)

### AnimalShelter

For the class itself I created two Queues, `left` and `right` to mimic the content of each being exchanged between my hands.

For the `enqueue` method I check first that the input value matches `cat` or `dog` and if not returns without enqueuing anything. Then make a couple of check statements, ensuring all new enqueues go into the queue that is *not* empty, and start in the `right` queue if both are empty.

The `dequeue` method was interesting. For the sake of brevity in later code I created two variables, `fullQueue` and `emptyQueue` and set them to be their respective queues using check statements.

I issue two more check statements. The first checking if the front of the `fullqueue` is the input preference, and dequeueing and returning if so. The other checks if the input preference is anything besides either cat or dog, and if so dequeues and returns again since the front of the queue is obviously the animal that has spent the most time in the shelter (stretch goal).

Two more variables are created. One just a holder for the eventual target, the other a boolean `switch` variable I'll use later.

If I get past all of those check statements then I begin my iteration through the `fullqueue` `while` the boolean `switch` I created earlier is false *and* the `fullqueue` isn't empty. I create an early check statement in the loop, checking if the current `front` of the `fullqueue` matches the input preference, and that the `switch` is still false. If both conditions are met I `dequeue` into the `holder` and flip the `switch` to be true, so this check statement's code will never trigger again. For every iteration the `emptyqueue` is enqueued with what's being `dequeued` from the `fullqueue` until the `fullqueue` is empty and the loop breaks. At that point I return the `holder` which has been so kind as to keep the target animal. Doing this ensures I preserve the order of the queue and the oldest of the target animals is removed from the queue first.

![animalShelter](/whiteboards/animalShelter.jpg)