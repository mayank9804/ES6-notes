{
    let a = 10;
    let b = 20;
    var c = 2;
    console.log(a,b);
}
// console.log(a); Will generate error
//will not create error because it is declared in current execution context
//Here it will be global one
//var has no block scope
console.log(c);
{
    const c = 10;
    console.log(c);
}
console.log(c);
// ab();
var ab = function(){
    console.log("Hello");
}
ab();
//Function Execution vs Function Invoke
// var abc = ab; var abc = ab();

(function(){
    console.log("Hello world");
})();

ab = (function(){
    var a = 10;
    var b = 20;
})();
// console.log(a);

//Javascript's functions are called first class function
bc = ()=>{
    console.log("Hello");
    console.log("World");
    return "abc";
}

console.log(bc());








var objDev = function(){
    this.hello = "Hello";
    this.greet = function(){
        console.log(this.hello);
    }
    this.displayGreet = function(){
        console.log(this);
        let self = this;
        console.log(self.greet());
    }
}
var o1 = new objDev();
o1.displayGreet();

function *genFunc(){
    for(i=1;i<=4;i++){
        yield i;
    }
}
for (i of genFunc()){
    console.log(i);
}


console.log(1);
console.log(2);
setTimeout(()=>console.log(3),1000);

let getTicket = ()=>{
    
    setTimeout(findSeat,5000);
    console.log("Ticket found")
};

let findSeat = ()=>{
    // return new Promise((resolve,request)=>{
        console.log("Seat found");
     setTimeout(()=>{
         console.log("Success")
        //  resolve('Seat found');
     },2000);   
    // });
};

let busService = ()=>{
        // getTicket()
        // .then(data=>findSeat()).then(data=>console.log("Is finish")).catch(data=>console.log("Error in grabbing seat"))
        // .catch(err=>console.log("Error in Bus Ticket"));
        getTicket();
};
busService();
