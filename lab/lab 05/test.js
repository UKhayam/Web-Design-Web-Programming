// ****** Declare then Calling => OK *******
// function greet(name) {
//   return `Hello ${name}`;
// }
// console.log(greet("Umar"));

// ****** Calling then Decalre => OK ******
// console.log(greet("Ali"));
// function greet(name) {
//   return `Hello ${name}! Welcome to College!`;
// }

// ****** Function Expression Then Calling  => OK ******
// const greet = function(name){
//     return `Hello ${name}!`
// }
// console.log(greet("Hasnain"));

// ****** Calling then Function Expression  => NOT WORK ******
console.log(greet("Hasnain"));
const greet = function(name){
    return `Hello ${name}!`
}