// Major new feature

for (i of [1,2,3,5][Symbol.iterator]()){
    console.log(i);
}

let obj = {
    [Symbol.iterator](){
        let nextId = 8000;
        return{
            next(){
                return{
                    value:nextId++,
                    done:false
                };
            }
        };
    }
};
for(i of obj){
    if(i<8005){
        console.log(i);
    }
    else{
        break;
    }
}
let it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
