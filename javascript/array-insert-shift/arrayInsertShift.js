`use strict`;

const array = [2, 4, 6, -8];
const value = 5;

function arrayInsertShift(array, value){
  const newArray = [];
  let j = 0;
  let valuePushed = false;
  for (let i = 0; i < array.length; i++){
    newArray.push(i);
    if (j < array.length && !valuePushed){
      j += 2;
    }
    if (j > array.length && !valuePushed) {
      newArray.push(value);
      valuePushed = true;
    }
  }
  return newArray;
}

arrayInsertShift(array, value);
