class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

//Elimina el ultimo elemento del array
  pop() {
    const lastItem = this.data[this.length -1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  //Elimina un elemento especifico del array
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
// Estamos en el loop: for(let i = index; i < this.length -1; i++) este empieza con el i = index, es decir, el bucle empieza con “ellie”, y terminara cuando nos quedemos sin array.
// this.data[i] = this.data[i + 1]; Aca empieza el show, entonces la idea es eliminar a ellie, entonces ahora, ellie = this.data[i] pero yo la quiero eliminar, entonces la sobreescribiremos con this.data[i + 1] = (’nina’) ahora el array es [ariel,nina,nina,celular],
// ahora nina = this.data[2] ⇒ se sobreescriibira con celular, y entonces quedara ⇒ [’ariel’,’’nina’,’celular’,’celular’]
// Ahora ya no seguimos porque no hay mas array, entonces que sucede?
// delete this.data[this.length -1] borramos la ultima posicion del array, es decir celular, ahora el array queda asi:[’ariel’,’’nina’,’celular’,undefined]
// queda eliminar la longitud del array para que no sea vea el undefined ⇒ this.length–
  shiftIndex(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  //Eliminar el primer elemento del array
  shift() {
    const item = this.data[0];
    this.shiftIndex(0);
    return item;
  }

  //Agregar un elemento al inicio del array
  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.length++;
    this.data[0] = item;
    return this.data;
  }
}
const array = new MyArray();
array.push('kev');
array.push('pau');
array.push('mari');
// array.shift();
array.unshift('hola')
array.unshift('primero')

console.log(array.data[4]);
