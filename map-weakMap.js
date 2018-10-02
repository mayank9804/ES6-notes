let employee1 = {name:'Mayank'};
let employee2 = {name:'Dilip'};

let employees = new Map();
employees.set(employee1,'ABC');
employees.set(employee2,'DEF');
console.log(employees.get(employee1));

//Map's constructor can create a map based off of an iterable
employee1 = null;
console.log(employees.size);
console.log(employees.get(employee1));


let weakEmployee1 = {name:'Mayank'};
let weakEmployee2 = {name:'Dilip'};
let weakEmployees = new WeakMap();
weakEmployees.set(weakEmployee1,'ABC');
weakEmployees.set(weakEmployee2,'123');

weakEmployee1 = null;
// console.log(weakEmployees.size); We cannot access the size of WeakMap
console.log(weakEmployees.get(weakEmployee1));
console.log(weakEmployees.get(weakEmployee2));