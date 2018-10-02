let cube =(a)=>{
    return a*a*a;
};

var graph = {
    options:{
        color:'white',
        thickness:'2px'
    },
    draw: function(){
        console.log('From graph draw function');
    }
}

exports.cube = cube;
exports.graph = graph;
