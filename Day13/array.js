let arr=[10,20,30,40]
console.log(arr);

// let x=[]
// for(let i=0;i<arr.length;i++){
//     x.push(arr[i]+5)
// }
// console.log(x);

// map
let x=arr.map((e,i)=>{
    console.log(e,i);
    return e+5
})
console.log(x);
console.log(arr);

// reduce
let arr1=[10,20,30,40,50]
console.log(arr1);
let y=arr1.reduce((acc,v)=>{
    // console.log(acc,v);
    return acc+v
},5)
console.log(y);
console.log(arr1);


// Sort
let arr2=[5,4,2,-1,1,3,8]
console.log(arr2.sort());

let arr3=[4,6,80,10,-3,0,50]
let x1=arr3.sort((a,b)=>{
    // return a-b
    return b-a
})
console.log(x1);
console.log(x1.reverse());
console.log(arr3);

//filter
let arr4=[10,20,30,40,50]

// let a1=[]
// for(let i=0;i<arr4.length;i++){
//     if(arr4[i]>20){
//         a1.push(arr4[i])
//     }
// }
// console.log(a1);

let q=arr4.filter((e)=>{
    return e>20
})
console.log(q);

let arr5=[5,3,2,10,30,80]
console.log(arr5);
console.log(arr5[3]);
console.log(arr5[4]);
// Slice
console.log(arr5.slice(3,5));
console.log(arr5.slice(2,4));
console.log(arr5.slice(3));
console.log(arr5);

// Splice
let arr6=[10,20,30,40,50]
arr6.splice(2,2,"hello")
console.log(arr6);

arr6.splice(1,0,"hi")
console.log(arr6);

arr6.splice(2,1)
console.log(arr6);

arr6.splice(0,arr6.length)
console.log(arr6);


let arr7=[10,20,30,40,50]
// for of will print value
for(let i of arr7){
    console.log(i);
}
// for in will print value
for(let i in arr7){
    console.log(i);
}
//for each
// it will print value and indexes
arr7.forEach((e,i)=>{
    console.log(e,i);
})
//entries
//it will print indexes and value in the form of array
let r=arr7.entries()
// console.log(r);
for(let i of r){
    console.log(i);
}






