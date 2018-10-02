// // admin = true;

// function loginRequired(admin,obj){

//     function wrapper(){
//         if(admin==true){
//             obj.func();
//         }
//         else{
//             console.log("Dare not hit this url again!");
//             return;
//         }
//     }

//     return wrapper;
// }

// // @loginRequired
// // function tryToFetchDashboard(){
// //     console.log("Fetched");
// // }

// class myPortal{
//     constructor(a){
//         this.admin = a;
//         console.log("My portal instantiated. Following are the routes");
//         console.log("Following are some routes you can access by using yourPortalName.routeName()");
//         console.log("1. Home");
//         console.log("2. Change my settings");
//     }
//     home(){
//         console.log("Home Displaying. You don't require a login for this route");
//     }
//     @loginRequired(this.a,this)
//     changeMySettings(){
//         console.log("Settings Changed. See you logged in using a decorator. Did you write an authentication code for this. DRY:)");
//     }
// }

var admin = false;
function loginRequired(target, name, descriptor) {
    const original = descriptor.value.bind(target);
    descriptor.value = () => {
        if (admin === true) {
            original();
        }
        else {
            console.log("Dare not hit this url again!");
        }
    };

}


class myPortal{
    constructor(){
        console.log("My portal instantiated. Following are the routes");
        console.log("Following are some routes you can access by using yourPortalName.routeName()");
        console.log("1. Home");
        console.log("2. Change my settings");
    }
    home(){
        console.log("Home Displaying. You don't require a login for this route");
    }
    @loginRequired
    changeMySettings(){
        console.log("Settings Changed. See you logged in using a decorator. Did you write an authentication code for this. DRY:)");
    }
    @loginRequired
    myDashboard() {
        console.log("Dashboard Opened");
    }
}

let mayank = new myPortal();
mayank.changeMySettings();
mayank.myDashboard();