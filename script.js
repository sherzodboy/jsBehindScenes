// 'use strict';

// function calcAge(birthYear) {
//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);
//     return output;
//   }
//   const age = 2024 - birthYear;
//   printAge();
//   return age;
// }

// calcAge(2000);

// -----------------------     hoisting
// console.log(age);
// console.log(yaer);
// console.log(date);

// let age = 20;
// const yaer = 2024;
// var date = 7;

// ----------------------    tempral dead zone
// if (true) {
//   // TDZ start
//   console.log(x);
//   alert(1);

//   let x = 10;
//   // TDZ end
// }

// the this keyword for functions

// function declaration
// function calcAge(birthYear) {
//   console.log(this);
//   return 2024 - birthYear;
// }
// calcAge(2000);

// function expression
// const calcAge = function (birthYear) {
//   console.log(this);
//   return 2024 - birthYear;
// };
// calcAge(2000);

// // arrow function
// const calcAge = (birthYear) => {
//   console.log(this);
//   return 2024 - birthYear;
// };
// calcAge(2000);

// object this
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Smiwth',
//   year: 1990,

//   age: function () {
//     console.log(2024 - this.year);
//   },
// };
// jonas.age();

// const btnEl = document.querySelector('.btn');
// const titleEl = document.querySelector('.title');

// btnEl.addEventListener('click', function () {
//   this.style.backgroundColor = 'red';
// });

// console.log(this);

// const jonas = {
//   year: 1990,

//   calcAge: function () {
//     console.log(2024 - this.year);
//   },
// };

// const ann = {
//   year: 2000,
// };

// ann.calcAge = jonas.calcAge;
// ann.calcAge();

// var year = 2000;

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Smiwth',
//   year: 1990,

//   age: function () {
//     console.log(2024 - this.year);

//     // old es5
//     // const self = this;
//     // const greet = function () {
//     //   console.log(self);
//     //   console.log(`hey ${self.firstName}`);
//     // };
//     // greet();

//     // after es6
//     const greet = () => {
//       console.log(this);
//       console.log(`hey ${this.firstName}`);
//     };
//     greet();
//   },
// };

// jonas.age();

// const exTra = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// exTra(1, 2, 3, 4, 5, 6);

// const exTra = (a, b) => {
//   console.log(arguments); // not working after es6 only arrow fn
//   return a + b;
// };

// exTra(1, 2, 3, 4, 5, 6);

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('Frined', friend);
// console.log('Me', me);

// let firstName = 'Jessica';
// let oldLastName = firstName;
// firstName = 'Mono';

// console.log(firstName);
// console.log(oldLastName);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Mona',
//   age: 25,
// };

// const merriedJessica = jessica;
// merriedJessica.lastName = 'Wiliam';

// console.log('Before merriage', jessica);
// console.log('After merriage', merriedJessica);

// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Mona',
//   age: 25,
// };

// const copyJessica = Object.assign({}, jessica2);
// copyJessica.lastName = 'Wiliam';

// console.log('Before merriage', jessica2);
// console.log('After merriage', copyJessica);

// flex
// one dimentional layout row or culumn

// grid
// two dimentional layout row and culumn in one time

// let x = 2;
// console.log(x++); 2
// console.log(x); 3
