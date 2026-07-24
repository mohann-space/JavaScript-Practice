(function(a,b){
    console.log("hi iife");
    console.log(a+b);
})(10,20);

(()=>{
    console.log("hello iife");
})()

let a=(()=>{
    console.log("hello iife 1");
    
})()