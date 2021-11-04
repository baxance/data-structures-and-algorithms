'use strict';

const { Stack } = require('./stack');


// function validateBrackets(string) {
//   console.log(string);
//   let charArray = string.split('');
//   console.log(charArray);

//   if (charArray[0] === ')' || charArray[0] === ']' || charArray[0] === '}') { return false; }

//   let temp = charArray[0];

//   for (let i=1; i < charArray.length; i++) {
//     if (charArray[i] === '(' || charArray[i] === '[' || charArray[i] === '{') { temp = i; }
//     switch (i) {
//     case ')':
//       if (temp !== '(') { return false; }
//       break;
//     }
//     switch (i) {
//     case ']':
//       if (temp !== '[') { return false; }
//       break;
//     }
//     switch (i) {
//     case '}':
//       if (temp !== '{') { return false; }
//       break;
//     }
//   } return true;
// }

function validateBrackets(string) {
  let stack = new Stack();

  for (let i=0; i<string.length; i++) {
    let char = string[i]; // char = (
    // console.log(char);
    //      '() { []'
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
      // console.log(stack.peek());
      continue;
    }

    console.log('stack is ' + stack.peek());
    // console.log(stack.pop());
    // console.log(stack.peek());
    // if (stack.length === 0) {return false;}

    // if (char === ')' || char === ']' || char === '}') {
    // let check;
    switch (char) {
    case ')':
      // console.log('hitting paren switch-case with ' + char);
      // console.log('peek ' + stack.peek());
      // console.log('pop ' + stack.pop());
      // console.log('pop 2 ' + stack.pop());
      // console.log('empty? ' + (stack.pop() === null));
      console.log(stack.peek());
      if (stack.peek === '(') {
        stack.pop();
        console.log(stack.isEmpty());
      } else return false;
      // check = stack.pop();
      // if (check === '{' || check === '[') {return false;}
      break;

    case '}':
      // console.log('hitting curly switch-case with ' + char);
      // console.log('peek ' + stack.peek());
      // console.log('pop ' + stack.pop());
      if (stack.peek === '{') {
        stack.pop();
      } else return false;
      // check = stack.pop();
      // if (check === '(' || check === '[') {return false;}
      break;

    case ']':
      // console.log('hitting square switch-case with ' + char);
      // console.log('peek ' + stack.peek());
      // console.log('pop ' + stack.pop());
      if (stack.peek === '[') {
        stack.pop();
      } else return false;
      // check = stack.pop();
      // if (check === '{' || check === '(') {return false;}
      break;
    }
    // }
  }
  // if (stack.top === null) {return true;}
  // else return false;

  // console.log('peek at final stack '+ stack.peek());
  console.log('is empty? ' + stack.isEmpty());
  // console.log(stack.pop()); // should log '{'
  // console.log(stack.peek());

  // if (!stack.isEmpty()) {return false;}
  // console.log(stack.peek());
  // return (stack.isEmpty());
  return (stack.isEmpty());

}

module.exports = validateBrackets;
