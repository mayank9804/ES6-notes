//Rest
function foo(value,...categories){
    console.log(categories);
    console.log(arguments.length);
}
foo(100,'Table','Chair');
foo(500);

//Spread
var prices = "122028";
var priceArray = [...prices];
console.log(priceArray);
