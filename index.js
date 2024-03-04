// EXAMPLE 1 - Update all the Values in an Object in JavaScript

const obj = {
  country: 'Chile',
  city: 'Santiago',
  address: 'Example',
  name: 'bobby hadz',
};

Object.keys(obj).forEach(key => {
  obj[key] = '';
});

// 👇️ { country: '', city: '', address: '', name: '' }
console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Conditionally update the values in an object

// const obj = {
//   name: 'bobby hadz',
//   num1: 9,
//   num2: 19,
//   num3: 29,
// };

// Object.keys(obj).forEach((key, index) => {
//   if (typeof obj[key] === 'number' && obj[key] > 10) {
//     obj[key] = 0;
//   }
// });

// // 👇️ { name: 'bobby hadz', num1: 9, num2: 0, num3: 0 }
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Update all the Values in an Object without Mutation

// const obj = {
//   country: 'Chile',
//   city: 'Santiago',
//   address: 'Example',
//   name: 'bobby hadz',
// };

// const newObj = Object.keys(obj).reduce((accumulator, key) => {
//   return {...accumulator, [key]: ''};
// }, {});

// // { country: '', city: '', address: '', name: '' }
// console.log(newObj);

// // {
// //   country: 'Chile',
// //   city: 'Santiago',
// //   address: 'Example',
// //   name: 'bobby hadz'
// // }
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Conditionally update the values in an object using reduce()

// const obj = {
//   name: 'bobby hadz',
//   num1: 9,
//   num2: 19,
//   num3: 29,
// };

// const newObj = Object.keys(obj).reduce((accumulator, key) => {
//   if (typeof key[obj] === 'number' && key[obj] > 10) {
//     return {...accumulator, [key]: 0};
//   }

//   return {...accumulator, [key]: obj[key]};
// }, {});

// // 👇️ { name: 'bobby hadz', num1: 9, num2: 19, num3: 29 }
// console.log(newObj);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Update all the Values in an Object using `for...of`

// const obj = {
//   country: 'Chile',
//   city: 'Santiago',
//   address: 'Example',
//   name: 'bobby hadz',
// };

// for (const key of Object.keys(obj)) {
//   obj[key] = '';
// }

// // 👇️ { country: '', city: '', address: '', name: '' }
// console.log(obj);
