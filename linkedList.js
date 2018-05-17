'use strict';
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
// node class's constructor accepts a variable 
//called value that holds the data. Each node also has a next variable that serves as a pointer to the next node.
class LinkedList {
  constructor() {
    this.head = null;
    // head always contains the first node.
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }
  //O(1) inserting at only one place, the first position, regardless of the length of the list.
   
  insertBefore(item, prevItem){
    if(this.head === null) {
      return this.insertFirst(item);
    }
    if(this.head.value === prevItem) {
      return this.insertFirst(item);
    }
  
    let currentNode = this.head;
    let prevNode = this.head;

    while ((currentNode !== null) && (currentNode.value !== prevItem)) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if(currentNode === null){
      console.log('Next Item is not found');
      return;
    }
    prevNode.next = new _Node(item, currentNode);
    
  }
   
  insertAfter(item, nextItem){
    if(this.head === null) {
      return this.insertFirst(item);
    }
    if (this.head.value === nextItem) {
      return this.insertLast(item);
    }

    let currentNode = this.head;
    let nextNode = this.head;

    while ((currentNode !== null) && (currentNode.value !== nextItem)) {
      currentNode = currentNode.next;
      nextNode = currentNode.next;
    }
    if (currentNode=== null) {
      console.log('Next item Not Found');
      return;
    }
    currentNode.next = new _Node(item, nextNode);
  }


  insertAt(item, position){
    if(this.head === null || position === 0) {
      return this.insertFirst(item);
    }
    let currentNode = this.head;
    let prevNode = this.head;
    let ticks = 0;

    while(ticks !== position){
      if (currentNode.next === null && position-1 === ticks ){
        this.insertLastItem(item);
      }
      if(currentNode.next === null && position-1 !== ticks){
        throw new Error ('Spot is not available');
      }
    
      prevNode = currentNode;
      currentNode = currentNode.next;
      ticks++;
    }
    prevNode.next= new _Node(item, currentNode);
  }

  insertLast(item){
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  //O(n) equires iterating over all the nodes one by one until you reach the end

  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //Check for the item 
    while (currNode.value !== item) {
      //return null if end of the list 
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking 
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }
  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function main(){
  const SLL = new LinkedList;
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker'); 
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');

  SLL.remove('squirrel'); //Item not found

  SLL.insertBefore('Athena','Boomer');
  SLL.insertAfter('Hotdog', 'Boomer');

  SLL.insertAt('Kat', 7);

  SLL.remove('Tauhida');

  console.log(JSON.stringify(SLL));
  return SLL;
}
main();

function display(list) {
  let currentNode = list.head;
  while(currentNode !== null){
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}
console.log(display(main()));

function size(list){

  let currentNode = list.head;
  let count = 0;
  if(list.head){
    count =1;
  }
  else{
    throw new Error('List is empty');
  }
  while(currentNode.next !== null){
    currentNode = currentNode.next;
    count ++;
  }
  return count;
}
console.log(size(main()));

function isEmpty(list){
  if(list.head){
    console.log(false);
  }else{
    console.log(true);
  }
}
console.log(isEmpty(main()));

function findPrevious(list, item){
  let currentNode = list.head;
  let prevNode = list.head;
  if(item === list.head.value){
    throw new Error('No previous item');
  }

  while ((currentNode !== null) && (currentNode.value !== item)) {
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  return prevNode.value;
}

console.log(findPrevious(main(),'Athena'));

function findLast(list, item){
  if (list.head === null) {
    throw new Error('List is empty');
  }
  else {
    let currentNode = list.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
}
console.log(findLast(main(), 'Athena'));