let arr=[10,20,30,40,50]
console.log(arr);
console.log(arr.includes(40));
console.log(arr.includes(4));
console.log(arr.includes(20));
console.log(arr.includes(80));

console.log(arr.indexOf(80));
console.log(arr.indexOf(40));
console.log(arr.indexOf(20));

let arr1=[10,20,[30,40],[[50]],[[[[[[[60]]]]]]]]
console.log(arr1);
console.log(arr1.flat());
console.log(arr1.flat(Infinity));
console.log(arr1.flat(4));

let arr2=[10,20,30,40,50]
console.log(arr2);
let arr3=[110,120,130]
let arr4=[2,3,4]
console.log(arr3);
console.log(arr2.concat(arr3,arr4));

let arr5=[2,3,12,5,8,10,5,20,2]
let w=arr5.find((e)=>{
    return e>5
})
console.log(w);
let w1=arr5.findLast((e)=>{
    return e>5
})
console.log(w1);

let x=arr5.findIndex((e)=>{
    return e>5
})
console.log(x);

let x1=arr5.findLastIndex((e)=>{
    return e>5
})
console.log(x1);


