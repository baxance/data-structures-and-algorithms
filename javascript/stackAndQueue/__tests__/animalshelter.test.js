'use strict';

const { AnimalShelter } = require('../animalShelter');

describe('animal shelter', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('Can successfully add an animal to the shelter', () => {
  test('Add a cat or a dog (string) to the shelter', () => {
    let testShelter = new AnimalShelter();
    testShelter.enqueueAnimal('cat');
    expect(testShelter.leftQueue.peek()).toBe('cat');
  });
});

describe('Can successfully add multiple animals to the shelter', () => {
  test('Add multiple cats or dogs (string) to the shelter', () => {
    let testShelter = new AnimalShelter();
    testShelter.enqueueAnimal('cat');
    testShelter.enqueueAnimal('dog');
    expect(testShelter.leftQueue.front.next.val).toBe('dog');
  });
});

describe('Can successfully remove animal from the shelter', () => {
  test('Returns the preferred animal from shelter', () => {
    let testShelter = new AnimalShelter();
    testShelter.enqueueAnimal('cat');
    testShelter.enqueueAnimal('dog');
    expect(testShelter.dequeueAnimal('cat')).toBe('cat');
  });
});

describe('Can successfully remove animal not at the front of the queue from the shelter', () => {
  test('Returns the preferred animal from shelter', () => {
    let testShelter = new AnimalShelter();
    testShelter.enqueueAnimal('cat');
    testShelter.enqueueAnimal('dog');
    expect(testShelter.dequeueAnimal('dog')).toBe('dog');
  });
});

describe('Can successfully remove senior ', () => {
  test('Returns the preferred animal from shelter', () => {
    let testShelter = new AnimalShelter();
    testShelter.enqueueAnimal('cat');
    testShelter.enqueueAnimal('dog');
    expect(testShelter.dequeueAnimal('pig')).toBe('cat');
  });
});

describe('Can remove multiple animals and otherwise maintian the queue', () => {
  test('The ', () => {
    let testShelter = new AnimalShelter();
    testShelter.enqueueAnimal('dog'); // <- (3) should still be the front of the rightQueue
    testShelter.enqueueAnimal('cat'); // <- (1) Removed, rest of queue emptied into leftQueue
    testShelter.enqueueAnimal('cat'); // <- (2) Removed, rest of queue emptied into rightQueue
    testShelter.enqueueAnimal('dog');
    testShelter.enqueueAnimal('dog');
    testShelter.dequeueAnimal('cat');
    testShelter.dequeueAnimal('cat');
    expect(testShelter.rightQueue.peek()).toBe('dog');
  });
});


