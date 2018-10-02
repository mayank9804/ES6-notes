console.log(a);
var a = "A";

//Hoisting doesn't occur
//console.log(b);//This line will give error
let b = "B";
console.log(b);//All f9

{
    let b = 'Block B';
    console.log(b);//Only in this block
    //Block B
}
console.log(b);//B will be printed

//No Hoisting
const c = "Constant C";
console.log(c);

{
    const c = "Block C";
}
//Global c
console.log(c);

// c="hello"; Will give error as constant cannot be changed