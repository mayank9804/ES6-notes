let a = ()=> console.log("Hello");
//Input->Output
//In single line no need of explicit return statement
a();

//IIFE arrow
(()=> console.log("Hello"))();

let b = (a) =>console.log(a);
b(3);
b();

// Arrow function binds this to the context where it is being executed

let obj = {
    name:'Mayank',
    greet:function(){
        return this.name;
    }
}
console.log(obj.greet());
// Will print Mayank as this inside greet is bounded by obj

let obj1 = {
    name:'Mayank',
    greet:()=>console.log(this.name)
}
console.log(obj1.greet());
//Undefined because arrow function binds this to the context where it is being executed
// in case of browser it will be window.


//Arrow function has no property named prototype
console.log(b.hasOwnProperty("prototype"));
//We cannot bind,call,apply this with arrow functions

function foo(){
    var a = "Hello";
    this.a = 22;
    this.greet =()=>{
        return this.a;
    }
}
var bc = new foo();
console.log(bc.greet());