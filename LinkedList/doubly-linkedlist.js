class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    }

    this.tail = this.head;
    this.length = 1;
  }

  //Agregar un nodo al final de la lista
  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }

  //Agregar un node al inicio de la lista
  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  //Agregar un nodo intermedio a la lista
  insert(index, value) {
    if (index === 0){
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getIndex(index - 1);
    const pointerToMove = this.getIndex(index);
    newNode.next = firstPointer.next;
    pointerToMove.prev = newNode;
    firstPointer.next = newNode;
    newNode.prev = firstPointer;

    this.length++;
    return this;
  }

  //Eliminar un nodo de la lista
  remove(index) {
    const nodeToRemove = this.getIndex(index);
    const previusNode = this.getIndex(index - 1);

    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (index === this.length - 1) {
      previusNode.next = null;
      this.tail = previusNode;
    } else {
      let prevPointer = nodeToRemove.next;
      prevPointer.prev = previusNode;
      previusNode.next = nodeToRemove.next;
    }

    this.length--;
    return this;
  }

  //Recorre los nodos de manera habitual, comenzando por la cabeza de la lista
  getIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  //Recorre lo nodos comenzando por la cola de la lista
  getIndexReverse(index) {
    let counter = this.length - 1;
    let currentNode = this.tail;

    while(counter > index) {
    currentNode = currentNode.prev;
    counter--;
    }
    return currentNode;
  } 
}

const myDoublyList = new DoublyLinkedList(1);
console.log(myDoublyList);