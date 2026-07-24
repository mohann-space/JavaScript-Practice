let a=function (){
    console.log("hello function expression");
}
a()
a()
let b=function(a,b){
    console.log(a+b);
    
}
b(1,2)
let c=function (a,b){
    console.log(a+b);
    console.log(a,b);
    console.log("hello less No.of Arguments");
}
c(10)
let d=function (a,b){
    console.log(a+b);
    console.log(a,b);
    console.log(arguments);
    console.log(arguments[3],arguments[2],arguments[4]);
}
d(10,20,30,40,50)
let e=function(){
    console.log("Hello");
    console.log(arguments);
}
e(1,4,5,7,3)
var x=40
let f=function (){
    var x=30
    console.log(x);
    console.log("Hello this keyword");
    console.log(this.x);
    console.log(window.x);
}
f()

// g(5,7)
// g(1,2)
// let g=function (a,b){
//     console.log("Hello Hoisting");
//     console.log(a+b);
// }
// g(5,3)

let h=function (){
    console.log("hello return keyword");
    return "hello js css"
}
h()
console.log(h());
console.log(h);

// Generator Function
function * demo(){
    yield "hello"
    yield "hi"
    yield "tata"
}
let i=demo()
console.log(i);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().done);

let j=function * (){
    console.log("Hey!!");
    yield "1st"
    console.log("hello");
    yield "2nd"
    console.log("tata");
    yield "3rd"
    yield "bye"    
}
console.log(j);
let k=j()
console.log(k);
console.log(k.next().value);
console.log(k.next().value);
console.log(k.next().value);
console.log(k.next().value);
console.log(k.next().done);

let n=function * (a,b){
    console.log(a+b);
    yield(a,b);
    console.log("hello");
    yield(arguments);
    console.log("hi");
    yield(arguments[3],arguments[2],arguments[4]);
}
n(10,20,30,40,50)
console.log(n);
let m=n(10,20,30,40,50)
console.log(m.next().value);
console.log(m.next().value);
console.log(m.next().value);
console.log(m.next().done);





