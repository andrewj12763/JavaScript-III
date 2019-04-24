/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding. this is bound to the window which is the browser object. 
* 2. Implicit binding is when we are within object and we are referring to itself.
* 3. A new binding is when you have an object and via parameters you define each part of the object and you refer to the values  as .this.something 
* 4. explicit is when you have already bound the object and are doing it again through another function outside of the object. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this.name);
// Principle 2

// code example for Implicit Binding
function Person(attr) {
    this.name = attr.name,
    this.age = attr.age,
    this.intro = function(){
        console.log (`My name is ${this.name} and I am ${this.age}`)
    }
};
// Principle 3

// code example for New Binding
const Abi = new Person({name:'AJ', age: 24});
Abi.intro();
// Principle 4

// code example for Explicit Binding
const sayHobbie = function(hobbie1, hobbie2, hobbie3){
    console.log(`My name is ${this.name} and I like to ${hobbie1}, ${hobbie2}, and ${hobbie3}.`)
};

const myHobbies = ['hunt', 'game', 'workouts'];

const abiHobbies = sayHobbie.bind(Abi, ...myHobbies);
abiHobbies();