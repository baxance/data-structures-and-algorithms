'use strict';

function firstRepeatedWord(string) {

  string = string.toLowerCase().match(/\b[\w']+\b/g);


  let wordMap = new Map();
  let repeatedWord = '';
  let i = 0;

  const _firstRepeatedWord = (string, i) => {
    if (wordMap.get(string[i])) {
      repeatedWord = string[i];
    } else wordMap.set(string[i], 1);
  };

  do {
    _firstRepeatedWord(string, i++);
  } while (repeatedWord === '');

  return repeatedWord;
}


function countWords(string) {

  string = string.toLowerCase().match(/\b[\w']+\b/g);

  let wordMap = new Map();
  let i = 0;

  const _countWords = (string, i) => {
    if(wordMap.get(string[i])) {
      wordMap.get(string[i]).occurances++;
    } else wordMap.set(string[i], {occurances: 1});
  };

  while (string[i + 1]) {
    _countWords(string, i++);
  }

  console.log(wordMap.entries());
  return wordMap.entries();
}


module.exports = { firstRepeatedWord, countWords };
