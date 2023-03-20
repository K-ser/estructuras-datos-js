class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hashFunction(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i));
    }
    return hash % this.data.length;
  }

  set(key, value) {
    const address = this._hashFunction(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value])
    return this.data; 
  }

  get(key) {
    const address = this._hashFunction(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  remove(key) {
    const address = this._hashFunction(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          let itemDeleted = currentBucket.splice(i, 1);
          return itemDeleted;
        }
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];
      if(element) {
        keys.push(element[0][0]);
        if(element.length > 1) {
          for(let j = 1; j < element.length; j++) {
            keys.push(element[j][0])
          }
        }
      }
    }

    return keys;
  }
}

const myHash = new HashTable(50);
myHash.set('kevin', 1996);
myHash.set('ivan', 1995);
myHash.set('mari', 1979);
myHash.set('victg', 1979);
console.log(myHash.keys())