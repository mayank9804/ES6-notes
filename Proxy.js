function employee(){
    this.name = 'Mayank';
    this.class = 'K1615';
}
var e = new employee();

// console.log(employee.name);

let p = new Proxy(e,{
    get(target,prop,reciever){
        // console.log(target);
        if (prop=== 'class')
            return "Denied";
        return Reflect.get(target,prop,reciever);
    } 
});

console.log(p.name);
console.log(p.class);

//Calling functions by Proxy
function getId(){
    return 55;
}
var p1 = new Proxy(getId,{
    apply:function(target,thisObj,argumentsList){
        return Reflect.apply(target,thisObj,argumentsList);
    }
});

console.log(p1());

//Revocable proxies
let t = {
    tableId:99
};

let {proxy,revoke} = Proxy.revocable(t,{
    get:function(target,prop,reciever){
        return Reflect.get(target,prop,reciever);
    }
});
console.log(proxy.tableId);
revoke();
// console.log(proxy.tableId);


var api = {
    _apiKey : '#346@35',
    url : 'https://www.google.com'
}

const RESTRICTED = ['_apiKey'];
api = new Proxy(api,{
    get:function(target,prop,reciever){
        if(RESTRICTED.indexOf(prop)>-1){
            throw Error(`${prop} is restricted`);
        }
        else
            return Reflect.get(target,prop,reciever);
    },
    set:function(target,value,reciever){
        if(RESTRICTED.indexOf(value)>-1){
            throw Error(`${value} is restricted`);
        }
        else
            return Reflect.get(target,value,reciever);
    }
});
try{api._apiKey = 'pp'}
catch(e){
    console.log(e);
}
