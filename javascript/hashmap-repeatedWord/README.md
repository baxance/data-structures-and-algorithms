# Insert to Middle of an Array

Write a function called repeated word that finds the first word to occur more than once in a string

## Example

| Input | Output |
| ----- | ------ |
| "Once upon a time, there was a brave princess who..." | "a" |

## Whiteboard Process

![whiteboard](./whiteboards/hashmapRepeatedWord.jpg)

## Approach & Efficiency

* To avoid mis-matches from case and punctuation convert whole string to lower case then break individual words without punctuation into an array using regex.
* create a variable of an empty string for the repeated word and another set to 0 to function as a counter
* create a recursive function that takes in the array'd string and the counter.
  * check if what is at the input array's index defined by the counter exists within the Map. if so, set the repeated word variable to be the string at that index.
  * if not, add the string at the index to the Map.
* call that recursive function, incrementing the counter by 1 for as long as the repeated word variable is an empty string. So if the variable has been given a string...
* return the repeated word.
