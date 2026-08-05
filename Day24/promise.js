// P E N D I N G  P H A S E
// function demo(a,b){
//     new Promise((res,rej)=>{
//         setTimeout(()=>{
//             for(let i=a;i<=b;i++){
//                 console.log(i);
//             }
//         },5000)
//     })
// }
// demo(10,"20a")
// function d1(){
//     console.log("hello");
// }
// d1()

//  R E S O L V E    A N D    R E J E C T E D

function demo(a,b){
    new Promise((res,rej)=>{
        setTimeout(()=>{
            if(isNaN(a)||isNaN(b)){
                rej()
            }
            else{
                res()
            }
        },5000)
    })
    .then(()=>{
        for(let i=a;i<=b;i++){
            console.log(i);
            }
    })
    .catch(()=>{
        console.error("Give the Correct Inputs");
        
    })
}
demo(10,20)
function d1(){
    console.log("hello");
}
d1()
 

//  P R O M I S E  C H A I N I N G

let room_is_cleaned = true
let x = new Promise((resolve,reject)=>{
    if(room_is_cleaned){
        resolve()
    }
    else{
        reject()
    }
})
// .then can be executed & get the OUTPUT multiple times.
.then(()=>{
    console.log("Room is cleaned");
})
.then(()=>{
    console.log("Promise 2");
})
.then(()=>{
    console.log("Promise 3");
})
.then(()=>{
    console.log("Promise 4");
})
.then(()=>{
    console.log("Promise 5");
})
// .catch can be executed multiple times but can't give the OUTPUT multiple times.
.catch(()=>{
    console.log("Room is NOT yet cleaned");
})
.catch(()=>{
    console.log("Promise Rejected 2");
})
.catch(()=>{
    console.log("Promise Rejected 3");
})
.catch(()=>{
    console.log("Promise Rejected 4");
})
.catch(()=>{
    console.log("Promise Rejected 5");
})
.catch(()=>{
    console.log("Promise Rejected 6");
})
// .finally can be executed & get the OUTPUT multiple times.
.finally(()=>{
    console.log("Final 1");
})
.finally(()=>{
    console.log("Final 2");
})
.finally(()=>{
    console.log("Final 3");
})
.finally(()=>{
    console.log("Final 4");
})

//  Destructuring ---> converting  elements  and keys into a variables.
//  2 Types - 
//  Array Destructuring --> elements are converted into  a variables
//  Object Destructuring --> Keys are converted into a variables.

// Array Destructuring 
let arr=[10,20,30,40]
let [q,r,s,t]=arr
console.log(q);
console.log(r);
console.log(s);
console.log(t);

//  Object Destructuring
let obj = {
    name1:"abc",
    id:1334,
    role:"web dev"
}
console.log(obj);
let {name1}=obj
console.log(name1);
let {id,role}=obj
console.log(id);
console.log(role);

//  REST AND SPREAD ...

//  rest --> packing of data rest parameter should be used for last parameter only(Only one rest parameter)(LHS)
//  Spread --> unpacking of data (RHS) , multiple spread parameters can be used.

//  Spread
let arr1=[10,20,30,40]
let arr2=[50,70]
console.log(...arr1);
let arr3=[...arr1,...arr2]
console.log(arr3);
console.log(...arr3);

//  REST
function d3(p,...u){
    console.log(p);
    console.log(u);
}
d3(10,20,30,40)





