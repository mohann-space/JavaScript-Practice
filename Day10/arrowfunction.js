let a=()=>{
    console.log("hello");
}
a()

// Implicit arrow function
let x=_=>"hello hi"
console.log(x());

let y=a1 =>"hello" + a1
console.log(y(5));

let z=(a1,b1)=>a1+b1
console.log(z(5,10));

// Explicit arrow function
let w=_=>{
    return "hello explicit"
}
console.log(w());

let s=a1=>{
    return "hello"+a1
}
console.log(s(5));

let s1=(a1,b1)=>{
    console.log(a1+b1);
    console.log(a1*b1);    
}
console.log(s1(20,4));

// Without argument and no parameters
let b=b1=>{
    console.log("hello js");
}
console.log(b(5));

// with parameters and arguments
let c=(a,b)=>{
    console.log(a,b);
    console.log(a+b);
    console.log("hello a and b");
}
console.log(c(10,20));

//  More No.of Parameters and less no.of arguments
let d=(a,b)=>{
    console.log(a+b);
    console.log(a,b);    
    console.log("hello less no.of arguments");
}
console.log(d(5,10));

// Less No.of Parameters and More no.of arguments
let e=(a,b)=>{
    console.log(a+b);
    console.log(a,b);  
    console.log("arguments");  
    // console.log(arguments[3],arguments[4],arguments[5]);
}
console.log(e(20,50));

// Functional Programming
function demo(a2,a3,task){
    // console.log(a2,a3);
    task(a2,a3)
}
demo(10,20,(e,f)=>{
    console.log(e+f);  
})
demo(50,10,function(e,f){
    console.log(e-f);
})
demo(50,10,function(e,f){
    console.log(e*f);
})

