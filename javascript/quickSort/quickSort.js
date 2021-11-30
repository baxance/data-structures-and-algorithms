'use strict';

function quickSort(arr, low, high) {
  if (low < high) {
    let position = partition(arr, low, high);
    console.log(arr);
    quickSort(arr, low, position - 1);

    quickSort(arr, position + 1, high);

  }
  // console.log('array at broken recursion: ', arr);
  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, j, i);
    }
  }
  swap(arr, high, i + 1);

  return i + 1;
}

function swap (arr, j, i) {
  let temp;

  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = quickSort;
