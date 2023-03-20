class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head;

    this.length = 1;
  }

  //Agregar un nodo al final de la lista
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }

  //Agregar un node al inicio de la lista
  prepend(value) {
    const newNode = new Node(value);
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
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
    return this;
  }

  //Eliminar un nodo de la lista
  remove(index) {
    const nodeToRemove = this.getIndex(index);
    const previusNode = this.getIndex(index - 1);

    if (index === 0) {
      this.head = this.head.next;
    } else if (index === this.length - 1) {
      previusNode.next = null;
      this.tail = previusNode;
    } else {
      previusNode.next = nodeToRemove.next;
    }

    this.length--;
    return this;
  }

  //Recorrer los nodos de la lista
  getIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new SinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
// myLinkedList.prepend(0);
// myLinkedList.insert(2, 2.5);
myLinkedList.insert(0);

console.log(myLinkedList);