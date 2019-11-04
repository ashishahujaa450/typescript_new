class ArrayofNumber {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayofString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayofAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const test = new ArrayofAnything<number>([5, 3, 4, 5]);
const test2 = new ArrayofAnything<string>(['a', 'b', 'c', 'd']);

// generics with funcctions
const printString = (arr: string[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const printNumber = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const printAnything = <T>(arr: T[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

printAnything([5, 3, 6, 4]);
printAnything(['adf', 'adf', 'adf']);

//generic constraints
class House {
  print(): void {
    console.log('i m a house');
  }
}

class Car {
  print(): void {
    console.log('i am a car');
  }
}

interface PrintAble {
  print(): void;
}

function printCarorHouse<T extends PrintAble>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printCarorHouse<House>([new House(), new House()]);
printCarorHouse<Car>([new Car(), new Car()]);
