'use strict';

/*
add
Arguments: key, value
Returns: nothing
This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
get
Arguments: key
Returns: Value associated with that key in the table
contains
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.
hash
Arguments: key
*/

const LinkedList = require('../linked-list/index.js');

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }


  add(key, value) {
    let index = this.hash(key);

    let bucket = this.map(index);

    let payload = { [key]: value };

    if (bucket) {
      bucket.append(payload);
    } else {
      let list = new LinkedList();
      list.append(payload);
      this.map[index] = list;
    }

  }

  get(key) {

  }

  contains(key) {

  }


  hash(key) {
    let hashedKey = 0;
    for (let i = 0; i < key.length; i++) {
      hashedKey += key.charCodeAt(i);
    }

    return (hashedKey * 599) % this.size;
  }
}

module.exports = HashTable;
