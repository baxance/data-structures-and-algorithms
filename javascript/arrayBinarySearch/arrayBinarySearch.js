`use strict`;

const array = [-131, -82, 0, 27, 42, 68, 179];
const searchVal = 42;

function binarySearch(array, searchVal){

  let lowSearchLimit = 0;
  let highSearchLimit = array.length -1;

  while(highSearchLimit >= lowSearchLimit){

    let middleNumber = (lowSearchLimit + highSearchLimit)/2;
    Math.floor(middleNumber);

    if (array[middleNumber] === searchVal) {
      return middleNumber;
    }
    if (array[middleNumber] < searchVal) {
      lowSearchLimit = middleNumber + 1;
    }
    if (array[middleNumber] > searchVal) {
      highSearchLimit = middleNumber -1;
    }
  }
  return -1;
}

binarySearch(array, searchVal);
