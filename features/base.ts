// let asting = 'ashish';

// let numArray: string[] = ['red', 'orage', 'yellow'];

// numArray.push('23');

// class Person {}

// let obj1: Person = new Person();

// let litt: { name: string; age: number } = {
//   name: 'ashish',
//   age: 15
// };

// const logNumber: (i: number) => void = i => {
//   console.log(i);
// };

// let objtest = {
//   name: 'ashish',
//   age: 45
// };

// const todayWeather = {
//   date: new Date(),
//   weather: 'sunny'
// };

// const weatherReport = ({
//   date,
//   weather
// }: {
//   date: Date;
//   weather: string;
// }): void => {
//   console.log(date);
//   console.log(weather);
// };

const obj = {
  person: 'ashsih',
  age: 21,
  coords: {
    lang: 18,
    lat: 22.22
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age, person }: { age: number; person: string } = obj;

const {
  coords: { lang, lat }
}: { coords: { lang: number; lat: number } } = obj;
