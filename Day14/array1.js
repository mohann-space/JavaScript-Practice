let arr=[50,40,30,20,10,8,9,20,7]

// min and max
let min=arr[0]
let max=arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
    if(arr[i>max]){
        max=arr[i]
    }
}
console.log(min);
console.log(max);

// sum

function sum(){
    let s=0
    for(let i=0;i<arr.length;i++){
        s+=arr[i]
    }
    console.log(s);
}
sum()

//average
function avg(){
    let s=0
    for(let i=0;i<arr.length;i++){
        s+=arr[i]
    }
    let avg=s/arr.length
    console.log(avg);
}
avg()

// prime
function prime(d){
    if(d<2){
        return false
    }
    for(let i=2;i<d/2;i++){
        if(d%i==0){
            return false
        }
    }
    return true
}
let r=[]
for(let i=0;i<arr.length;i++){
    if(prime(arr[i])){
        r.push(arr[i])
    }
}
console.log(r);


// even
function even(){
    let even=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even.push(arr[i])
        }
    }
    console.log(even);
}
even()

//odd
function odd(){
    let odd=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            odd.push(arr[i])
        }
    }
    console.log(odd);
}
odd()

//Asc
//Des
//occ