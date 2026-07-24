// literal way
let arr=[]
console.log(arr);
// new keyword
let arr1=new Array()
console.log(arr1);
// constructor way
let arr2=Array()
console.log(arr2);

let a=[10,"hi",true,false,NaN,undefined,window,null]
console.log(a);

let b=[]
console.log(b);
// push(n no.of argumnets) insert the elements from ending
b.push(10,20)
console.log(b);
// unshift(n no.of argumnets) insert the elements from the starting.
b.unshift(2,5)
console.log(b);
b.unshift("heyy!")
console.log(b);
// pop() It will remove only one element from the last.
b.pop()
console.log(b);
b.pop()
console.log(b);
// shift() It will remove only one element from the Starting.
b.shift()
console.log(b);
b.shift()
console.log(b);

// Length
console.log(b.length);
let length=b.length
for(let i=1;i<=length;i++){
    b.pop()
}
console.log(b);




