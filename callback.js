'use strict';
//Note that in following ways we frequently use callback
// functions in JavaScript
//1. for async execution (such as reading files and making HTTP requests)
//2. In event listeners/handlers
//3. In setTimeout and setInterval methods
//4. For Generalization 
function findAndValidateUser(username,password,done){
    var url="synack.pythonanywhere.com";
    function greetUser(username,cb){
        console.log("Hi "+ username);
        cb();
    }
    greetUser(username,function(){
        console.log("Succesfully Greeted User");
    });
    done();
}
findAndValidateUser("Mayank","ExGF",function(){
    console.log("DOne with callbacks");
});

// let getTicket = async()=>{
//     await setTimeout(()=>console.log("Ticket Got"),1000);
// }
// let getPopcorn = async()=>{
//     await setTimeout(()=>console.log("Popcorn done"),4000);
// }
// let getColdDrink = async()=>{
//     await setTimeout(()=>console.log("ColdDrink done"),5000);
// }

// let fullProcess = async()=>{
//     try{
//         console.log("Start");
//         await getTicket();
//         await getPopcorn();
//         await getColdDrink();
//         console.log('Done');
//     }catch(err){
//         console.log(err);
//     }
// }
// fullProcess();
//     //CN:77
    //CN-lab:95
    //Java:73
    //OS:66
    //Oslab:92
    //Automaton:57
    //algo:83
    //eng:82
    //maths:60+x 65
    //game:36+x  76
// class X{
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//     }
//     greetA(){
//         console.log(this.a,this.b);
//     }
// }

// var obj1 = new X(5,6);
// obj1.greetA();

var ob = ()=>console.log(this);
// function obj(){
//     console.log(this);
// }
ob();
// obj();

// document.addEventListener('click',function(){
//     console.log(this);
// });

// let price = 5;
// // console.log(Window.price);
// var quantity=3;
// var productView = {
//     price:7,
//     quantity:2,
//     printPrice:()=>{ 
//         console.log(this);
//         return this.price;
//     }

// };
// console.log(productView.printPrice());
// function updateProductId() {
//      productId = 12
//     }
    
//     let productId = null
//     updateProductId()
//     console.log(productId)


// let a = "1234";
// console.log(`Template  Literals ${a}`);

// function processInvoice(segments,...values){
//     console.log(segments);
//     console.log(values);
// }

// processInvoice `Hello World ${a}`;
// let Task=function(){
//     console.log(this);
//     console.log('constructingTask');
// };
// let task={};
// Task();

class Project{
    constructor(){
        console.log(new.target);
    }
}
class SoftwareProjects extends Project{
    constructor(a){
        super();
        console.log("Hey");
    }
}
new SoftwareProjects();