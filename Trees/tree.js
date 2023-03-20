class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //Insertar un nuevo nodo al arbol
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  //Buscar un nodo en el arbol
  search(value) {
    let currentNode = this.root;
    
    if (value === currentNode.value) {
      return currentNode;
    } else {
      while (true) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
          if (!currentNode) {
            return false;
          } else {
            if(value === currentNode.value) {
              return currentNode;
            }
          }
        } else {
          currentNode = currentNode.right;
          if (!currentNode) {
            return false;
          } else {
            if (value === currentNode.value) {
              return currentNode;
            }
          }
        }
      }
    }
  }

  //Metodo search con recursividad
  recursiveSearch(value, node = this.root) {
    if (node === null) {
      return false;
    } else if (value < node.value) {
      return this.recursiveSearach(value, node.left);
    } else if (value > node.value) {
      return this.recursiveSearach(value, node.right);
    } else if (value === node.value) {
      return node, true;
    }
  }

  //Encontrar el nodo menor dado un valor
  findMin(node = this.root) {
    while(node.left) {
      node = node.left;
    }
    return node;
  }

  //Eliminar un nodo 
  remove(value, node = this.root) {
    if (!node) {
      return null;
    }

    if (value === node.value) {
      if(!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }

      let temp = this.findMin(node.right);
      node.value = temp.value;
      node.right = this.remove(temp.value, node.right);
      return node;
    }
    if (value < node.value) {
      node.left = this.remove(value, node.left);
      return node;
    } 
    if (value > node.value) {
      node.right = this.remove(value, node.right)
      return node;
    }
  }
}


const tree = new BinarySearchTree();
tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(5);
tree.insert(15);
tree.insert(25);
tree.insert(35);
tree.insert(22);
tree.insert(23);

tree.remove(30)
console.log(tree);
