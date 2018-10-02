// Native Support in ES6 for Promises
// A promise is basically an object that is waiting for an async task to complete 
// When the operation does gets complete the promise gets either rejected or resolved
function doSync(){
    return new Promise((resolve,reject)=>{
        console.log("In promise code "+this);
        setTimeout(()=>{
            console.log("Task");
        },2000);
        resolve();
    });
}

doSync();