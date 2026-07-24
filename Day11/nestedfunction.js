function demo(){
    function d1(){
        console.log("hello d1");
    }
    function d2(){
        console.log("hello d2");
    }
    d1()
    d2()
}
demo()

function demo1(){
    function d1(){
        console.log("Hello d11");
    }
    function d2(){
        console.log("Hello d12");
    }
    return d1
}
demo1()()

function demo2(){
    function d1(){
        console.log("hola yoi");
    }
    function d2(){
        console.log("hola mi");
    }
    return [d1,d2]
}
demo2()[0]()
demo2()[1]()

// Lexical Scope/scope chain
var a=10
function demo3(){
    let a=30
    function d1(){
        let a=20
        console.log(a);
        console.log("zash");
    }
    function d2(){
        console.log(a);
        console.log("heyy!!");
    }
    d1()
    d2()
}
demo3()

//Recursive Function
function demo4(a){
    if (a===0) {
        return 0
    }  
   return a+demo4(a-1)
}
console.log(demo4(5));
// Factorial using Recursive
function demo5(a){
    if (a==0 || a===1) {
        return 1
    }
    return a*demo5(a-1)
}
console.log(demo5(5));

//Currying Function
function demo6(x){
    return function (y){
        return "Hello World "+x*y
    }
}
let s1=demo6(4)
console.log(s1(8));// hello world 32
console.log(demo6());// return function completely will print

