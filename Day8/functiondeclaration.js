// without arguments and no parameters 
function demo(){
    console.log("hello js");
}
demo()
demo()
// with parameters and arguments
function demo1(a,b){ 
    console.log(a+b);
    console.log("hello a and b");
}
demo1(10,20)

// with More No.of parameters & less No.of Arguments
function demo2(a,b){
    console.log(a+b);
    console.log(a,b);
    console.log("hello less No.of Arguments");
}
demo2(10)

//with less No.of parameters & More No.of Arguments
// Arguments object
function demo3(a,b){
    console.log(a+b);
    console.log(a,b);
    console.log(arguments);
    console.log(arguments[3],arguments[2],arguments[4]);
}
demo3(10,20,30,40,50)

// No parameters but more no.of Arguments
function demo4(){
    console.log("Hello");
    console.log(arguments);
}
demo4(1,4,5,7,3)

// this Keyword
var x=40
function demo5(){
    var x=30
    console.log(x);
    console.log("Hello this keyword");
    console.log(this.x);
    console.log(window.x);
}
demo5()

// hoisting
demo6(5,7)
demo6(1,2)
function demo6(a,b){
    console.log("Hello Hoisting");
    console.log(a+b);
}
demo6(5,3)

//return keyword
function demo7(){
    console.log("hello return keyword");
    // console.log("hello");
    return "hello js css"
}
demo7()
console.log(demo7());
console.log(demo7);

function demo8(){
    console.log("hello task");
}
console.log(demo8);
console.log(demo8());

function demo9(){
    console.log("hello prototype");
    
}
 demo9()

 console.log("prototype" in demo9);
 
 let w=new demo9()
 console.log(w);
 console.log(Object.getPrototypeOf(w)==demo9.prototype);
 
 

