// Generator is a special kind of function.
// It doesnt run through out at once
// it yields, and can be called many times and does not 
// stay on stack.
// We actually use an iterator to producer generator 

function *process(){
    yield 8000;
    yield 8001;
}

let it = process();
console.log(it.next());
console.log(it.next());
console.log(it.next());


function *idGen(){
    let nextId = 7000;
    while(true)
        yield nextId++;
}

let itIdGen = idGen();
for(let id of itIdGen){
    if(id>7500){break;}
    console.log(id);
}