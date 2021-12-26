/**
 * *Write a Java program to find middle element of LinkedList object (Using Node) in one pass.
 */

class Nodo {
  constructor(value, pointer, id) {
    this.value = value;
    this.pointer = pointer;
  }
}

class LinkedList {
  constructor() {
    this.head = new Nodo("", null);
    this.length = 0;
  }

  add(value) {
    this.length++;
    let actual = this.head;
    while (actual.pointer) { //if the pointer has a node goes in to him until it reaches the end of the list
      actual = actual.pointer;
    }
    actual.pointer = new Nodo(value, null); //add a new node to teh end of the list

    return actual.pointer;
  }

  delete(node) {
    let actual = this.head;
    let previous = ''

    while (actual.pointer) { //verifica si es existe un nodo siguiente
      previous = actual // referencia al nodo anterior
      actual = actual.pointer //nodo actual
      if (actual === node) {
        if(!actual.pointer){ //Elmininacion del ultimo nodo 
          console.log(actual)
          previous.pointer = null
        }else{
          previous.pointer = actual.pointer //Eliminacion de un nodo de enmedio
        }
      }
    }
  }

  findNode(node){
    let actual = this.head;
    
    while(actual) { 
      if(actual === node){
        return true
      }else{
        actual = actual.pointer
      }
    }
    return false
  }
}

const newList = new LinkedList();
const element1 = newList.add({ name: "maxo" })
const element2 = newList.add({ name: "Ronaldhino" })

// newList.delete(element2);
// newList.delete(element2)
// console.log(element1 === newList.head.pointer);
console.log(newList.findNode(element2))
console.log(newList.head)
