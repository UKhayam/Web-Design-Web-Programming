// function greet(name) {
//   return `Hello ${name}`;
// }
// console.log(greet("Ali"));

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
// console.log(greet("Hasnain"));
// const greet = function(name){
//     return `Hello ${name}!`
// }

const person = {
    name: "Alice",
    age: 25,
    greet: function() {
        return `Hello, my name is ${this.name} & Age is ${this.age}.`;
    }
};

console.log(person.name); // Alice
console.log(person.greet()); // Hello, my name is Alice.
