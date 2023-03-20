class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    // Top es el ultimo elemento y bottom es el primero
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  //Toma el ultimo elemento de la pila (stack) lo devuelve y llama a POP para eliminarlo
  peek() {
    return this.pop();
  }

  //Agregar un elemento al final de la pila, o sea en el top
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
    this.bottom = newNode;
    this.top = this.bottom;
    } else {
    newNode.next = this.top;
    this.top = newNode;
    }    

    this.length++;
    return this;
  }

  //Eliminar el ultimo elemento de la pila
  pop() {
    if (this.length === 0) {
      return console.warn('No hay elementos en la pila');
    } else if (this.length === 1) {
    this.bottom = null;
    } 
    
    let holdingPointer = this.top;
    this.top = holdingPointer.next;
    
    this.length--;
    return holdingPointer;
  }
}

const myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.peek();

console.log(myStack);
// console.log(myStack.peek());