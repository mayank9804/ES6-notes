a = function(){
    this.getA= function(){
        console.log("geta");
        return this;
    };
    this.getB = function(){
        console.log("b");
    };
};


b = new a();
b.getA().getB();



c = new Boolean(true);

if(c.valueOf()){
    console.log("Ok");
}
else{
    console.log("Not true");
}