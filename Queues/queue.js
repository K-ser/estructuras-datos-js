class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.star = null;
    this.end = null;

    this.length = 0;
  }

  //Agregar un elemento al final de la cola, o sea, será el primero en salir
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.star = newNode;
      this.end = this.star;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }

    this.length++;
    return this;
  }
  //Remover el primer elemento que se encuentra al inicio de la cola
  dequeue() {
    if (this.length === 0) {
      return console.warn('No hay elementos en espera');
    } else if (this.length === 1) {
      this.end = null;
    }
    let firstElement = this.star;
    this.star = firstElement.next;

    this.length--;
    return firstElement;
  }

  //Toma el primer elemento que se encuentra en la cola
  peek() {
    return this.star, this.dequeue();
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);

console.log(myQueue);