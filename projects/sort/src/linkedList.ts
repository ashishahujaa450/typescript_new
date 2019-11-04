import { Sortable } from './Sort';
import { Sorter } from './Sort';

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class linkedList extends Sorter implements Sortable {
  head: Node | null = null;

  //add new item to list
  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    //set pointer of last node to newly created node
    tail.next = node;
  }

  //get length of list
  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  //get value of speceifc index
  at(index: number): Node {
    if (!this.head) {
      throw new Error('index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('index out of bound');
  }

  //compare two values in list
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('no items to compare');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  //swap item into list
  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) {
      throw new Error('no items in the list to swap');
    }

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    //instead of swapping nodes just swapping values in the node
    const leftValue = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftValue;
  }

  //print values in linked list
  print(): void {
    if (!this.head) {
      throw new Error('No items in the list to view');
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
