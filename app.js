function asyncMethod(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(message+' ');
            resolve("Passed message");
            console.log("$");
            
        },500);
    });
}


// function asyncMethod(message,cb){
//     setTimeout(()=>{
//         console.log(message);
//         cb();
//     },500);
// }
// //Callback Hell
// function printAll(){
//     asyncMethod("Hello",()=>{
//         asyncMethod("World",()=>{    
//             asyncMethod("I am Mayank!",()=>{
//                 asyncMethod("Dealing with Asynchronous tasks!",()=>{
//                      console.log("Success!");
//                 });
//             });
//         });
//     });
// }


// printAll();









// Promise Hell
function printAll(){
    asyncMethod("Hello").then(data=>asyncMethod(data))
    .then(data=>asyncMethod("I am Mayank!"))
    .then(data=>asyncMethod("Dealing with Asynchronous tasks!"))
    .then(data=>asyncMethod("Success!"));
}

printAll();




















// //Async/Await
// async function printAll(){
//     await asyncMethod("Hello");
//     await asyncMethod("World");
//     await asyncMethod("I am Mayank");
//     await asyncMethod("Dealing with async methods");
//     await asyncMethod("Success");

// }
// printAll();











// function success(){
//     return asyncMethod("Succes!");
// }
// function deal(){
//     return asyncMethod("Dealing with async method!");
// }
// function tellName(){
//     return asyncMethod("I am Mayank");
// }
// function printWorld(){
//     return asyncMethod("World");
// }
// //Promise made simpler
// function printAll(){
//     asyncMethod("Hello")
//     .then(printWorld)
//     .then(tellName)
//     .then(deal)
//     .then(success);
// }



















