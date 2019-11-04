interface Vehicle {
  model: string;
  broken: boolean;
  year: number;
  summary(): string;
}

const car = {
  model: 'civic',
  broken: true,
  year: 1998,
  summary() {
    return `${this.model} & built in ${this.year}`;
  }
};

const printCar = (carObj: Vehicle): void => {
  //   console.log(`name: ${carObj.model}`);
  //   console.log(`is item broken?: ${carObj.broken}`);
  //   console.log(`year: ${carObj.year}`);

  carObj.summary();
};

printCar(car);
