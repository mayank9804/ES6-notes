class Task{
    //let taskId = 9000; Syntax error, we cannot add static var as it is.
    constructor(){
        console.log("Constructing task");
    }
    showId(){
        console.log('99');
    }
}
let task = new Task();
console.log(task.showId());

let var1 = class Student{
    constructor(){
        console.log("Constructing Student");
    }
}

new var1();

function foo(){}
// console.log(window.foo === foo); true
// class foo{

// }
// console.log(window.foo ===foo); false


class DevTask extends Task{
    // static let a = 9; 
    // You cannot assign a static variable
    constructor(){
        super();
        console.log("constructing DevTask");
    }
    description(){
        console.log("Assign a developer team");
    }
    static getDevLeadName(){
        console.log("Mayank");
    }  
}
//DevTask.a = 9; This will assign a static variable a = 9;

var dvt = new DevTask();
dvt.description();

DevTask.getDevLeadName();
// dvt.getDevLeadName();Error

console.log(DevTask.a);