'use strict';

const {firstRepeatedWord, countWords} = require('./repeatedWord.js');

xdescribe('First Repeated Word', () => {

  test('return "a" as first repeated word', () => {
    let testString = 'Once upon a time, there was a brave princess who...';
    expect(firstRepeatedWord(testString).match('a'));
  });

  test('return "it" as first repeated word', () => {
    let testString = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(firstRepeatedWord(testString).match('it'));
  });

  test('return "summer" as first repeated word', () => {
    let testString = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(firstRepeatedWord(testString).match('summer'));
  });

});

describe('Count occurences of each word', () => {

  xtest('return "a" with a value of 2 and other words with a value of 1', () => {
    let testString = 'Once upon a time, there was a brave princess who...';
    expect(countWords(testString).match());

  });

  test('return "it" as first repeated word', () => {
    let testString = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(countWords(testString).match('it'));
  });

  xtest('return "summer" as first repeated word', () => {
    let testString = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(countWords(testString).match('summer'));
  });

});
