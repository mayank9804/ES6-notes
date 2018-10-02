//Es5 problem
var salaryEs5 = Array(90000);
console.log(salaryEs5.length);//90000

var salaryEs6 = Array.of(90000);
console.log(salaryEs6.length);//1

let amounts = [800,810,820];
amounts = Array.from(amounts,v=>v+100);
console.log(amounts);

let salaries = [100,200,300];
salaries.fill(800);
console.log(salaries);

salaries.fill(500,1);
console.log(salaries);

let x = salaries.findIndex((v)=>v==500);
console.log(x);