// console.log(typeof Reflect);

class Location{
    constructor(){
        this.id = 33;
        console.log("Restaurant Instantiated");
        console.log(new.target);
    }
    get gId(){
        return this.id;
    }
    show(prefix){
        console.log(prefix+ ' ' + this.id);
    }
}
Reflect.set(Location,'id',90);
let r = Reflect.construct(Location,Location);

Reflect.set(r,'id',88);
console.log(Reflect.get(r,'gId',r));
console.log(r instanceof Location);
Reflect.apply(Location.prototype.show,{id:99},['REST: ']);
console.log(Reflect.getPrototypeOf(Location));

class Restaurant extends Location{
    constructor(){
        console.log("Extended Restaurant");
    }
}

console.log(Reflect.getPrototypeOf(Restaurant));


Reflect.
class PG{
    constructor(){

    }
}
Reflect.setPrototypeOf(PG,Location.prototype);
Reflect.apply(PG.show,{id:100},['Rest']);

let obj = {
    name:"Mayank",
    class:"K1615"
}

let obj1 = {...obj};
console.log(obj1);
console.log(Object.is(obj1,obj));