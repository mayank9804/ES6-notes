//New data type in ES6
//Gurantees a unique id or string
// Major function of symbols is to add properties to classes/objects
// guranting that name is unique
let a = Symbol.for('event');
console.log(a);

let b = Symbol('event');
console.log(b);

console.log(a===b);

let c = Symbol.for('event');
console.log(c);

console.log(a===c);
console.log(b===c);

let obj = {
    name:'Rock',
    [Symbol.for('obj')]:'Object'
};

console.log(obj[Symbol.for('obj')]);
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));