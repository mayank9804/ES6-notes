var ob = function(){
    this.cc = 55;
}

var obj1  = new ob();

function foo(){
    return this.cc;
}

fooBinded = foo.bind(obj1);

console.log(fooBinded());
