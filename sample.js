// //Object Literal
// var person1 = {
//   fname:"Mayank",
//   lname:"Sharma",
//   age:18
// };
// //Constructor function
// function Human(fname,lname,age){
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
//   function getFullName(){
//     return this.fname+' '+this.lname;
//   }
// }
// //The above function will have one prototype property attached to it
// // which points to prototype object and inside it has a constructor function
// // which points back to same function

// //Created this object named Mayank using constructor function
// // var mayank = new Human("Mayank","Sharma",19);
// // var souvick = new Human("Souvick","Mondal",20);
// //The above instances will have a __proto__ property, which points to protytype
// // object of Human function
// // console.log(mayank.getFullName == souvick.getFullName);

// //Protoypes
// function Human(fname,lname,age){
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
// }
// Human.prototype.getFullName = function(){
//   return this.fname+' '+this.lname;
// }
// var mayank = new Human("Mayank","Sharma",19);
// var souvick = new Human("Souvick","Mondal",20);
// console.log(mayank.getFullName == souvick.getFullName);




// prototypeObj = {
//     getFullName : function(){
//     return (this.fname+' '+this.lname);
// };
// var mayank = Object.create(prototypeObj,{
//   firstname:{
//     value:'Mayank';
//     writable:false;
//     enumerable: true;
//     configurable:false;
//   },
//   lastname:{
//     value:'Sharma';
//     writable:false;
//     enumerable: true;
//     configurable:false;
//   },
//   age:{
//     value:'Mayank';
//     writable:false;
//     enumerable: true;
//     configurable:false;
//   }
// });


// console.log(mayank.firstname);

// function Human(fname,lname,age){
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
// }
// prototypeObj = {
//   getFullName : function(){
//   return (this.fname+' '+this.lname);
// };
// var souvick = Object.create(prototypeObj,Human("Souvick","Mondal",18));




// var task = {};
// //or var task = Object.create(Object.prototype);
//   task.title = "My title";
//   task.description = "My description";

// console.log(task.title);
// var a = "buddy";
// task[a] = "Variable Key";
// console.log(task[a]);
// console.log(task["buddy"]);
// 'use-strict';
// var task = {
//   title : "My title",
//   description : "My description"
// }

// Object.defineProperty(task,'toString',{
//   value: function(){
//     return this.title + ' ' + this.description; 
//   },
//   writable:false,
//   enumerable:false,
//   configurable:false
// });
// task.toString = 'ho';
// // console.log(task.toString());
// // console.log(Object.keys(task));


// var urgentTask = Object.create(task);
// urgentTask.title = "Urgent Task";
// console.log(urgentTask.title);
// (function(){

// })();
console.log("Hello");
function foo(){
  if(2==3){
    console.log("HI");
  }
  return{
    a:4
  };
}
