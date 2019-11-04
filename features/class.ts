class Vehcile2 {
  constructor(public color: string) {}

  drive(): void {
    console.log('i am driving rightn now');
  }

  protected honk(): void {
    console.log('pe pe');
  }
}

const item3 = new Vehcile2('agfdasdf');
console.log(item3.color);

// class car2 extends Vehcile2 {
//   useHonk(): void {
//     this.honk();
//   }
// }

// const item2 = new car2();

// item2.useHonk();
