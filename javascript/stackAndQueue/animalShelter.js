'use strict';

const { Queue } = require('./queue');

// class Animal {
//   constructor(val)
//   {
//     this.val = val;
//     this.next= null;
//   }
// }

// class AnimalShelter {
//   constructor() {
//     this.dogQueue = new Queue();
//     this.catQueue = new Queue();

//   }

//   enqueueAnimal(animal) {
//     if (animal === 'cat') {
//       this.catQueue.enqueue(animal);
//     }
//     if (animal === 'dog') {
//       this.dogQueue.enqueue(animal);
//     } else return 'Shelter only accepting cats and dogs';
//   }

//   dequeueAnimal(preference) {
//     if (preference === 'cat'){
//       return this.catQueue.dequeue();
//     }
//     if (preference === 'dog'){
//       return this.dogQueue.dequeue();
//     } else {
//       let dog
//     }

//   }

// }

class AnimalShelter {
  constructor() {
    this.leftQueue = new Queue();
    this.rightQueue = new Queue();
  }

  enqueueAnimal(animal) {
    if (animal !== 'cat' && animal !== 'dog') {
      return 'sheler only accepting cats and dogs';
    }
    if (this.rightQueue.isEmpty()) {
      this.leftQueue.enqueue(animal);
    }
    if (this.leftQueue.isEmpty()) {
      this.rightQueue.enqueue(animal);
    }


    // return (animal !== 'dog' || animal !== 'cat') ? 'Shelter only accepting cats and dogs'
    //   : this.rightQueue.isEmpty() ? this.leftQueue.enqueue(animal)
    //     : this.rightQueue.enqueue(animal);
  }

  dequeueAnimal(preference) {
    let fullQueue;
    let emptyQueue;
    if (this.leftQueue.isEmpty() && !this.rightQueue.isEmpty()) {fullQueue = this.rightQueue, emptyQueue = this.leftQueue;} // changed from string 'right'
    if (this.rightQueue.isEmpty() && !this.leftQueue.isEmpty()) {fullQueue = this.leftQueue, emptyQueue = this. rightQueue;} // changed from string 'left'
    else { return 'both queues empty'; }

    let animalSwitch = false;
    let animalHolder;

    // if (queueSwitch === 'right') {
    if (fullQueue.peek() === preference){
      return fullQueue.dequeue();
    }

    if (preference !== 'cat' && preference !== 'dog') {
      return fullQueue.dequeue(); // front will be oldest if logic works and queue order is maintained
    }

    else {
      while (animalSwitch === false && !fullQueue.isEmpty()) {
        if (fullQueue.peek() === preference && animalSwitch === false) {
          animalHolder = fullQueue.dequeue();
          animalSwitch = true;
        }
        // if (preference !== 'cat' && preference !== 'dog') {
        //     return fullQueue.dequeue();
        //   }
        // }
        emptyQueue.enqueue(fullQueue.dequeue());
      } return animalHolder;
    }


    // }
    //
    //  PREVIOUS LOGIC EXECUTES DIFFERENT LOOP DEPENDING ON THE STRING OF THE SWITCH, CONDENSES ABOVE TO HAVE SWITCH DIRECTLY POINT TO WHICH QUEUE TO ACCESS
    //
    // if (queueSwitch === 'left') {
    //   if (this.leftQueue.front.val === preference){ return this.leftQueue.dequeue(); }
    //   else {
    //     while (animalSwitch === false && !this.leftQueue.isEmpty()) {
    //       if (this.leftQueue.front === preference && queueSwitch === false) {
    //         animalHolder = this.leftQueue.dequeue();
    //         animalSwitch = true;
    //       }
    //       this.rightQueue.enqueue(this.leftQueue.dequeue());
    //     } return animalHolder;
    //   }
    // }
    // else if (preference !== 'cat' && preference !== 'dog') {

  }

}


module.exports = { AnimalShelter };
