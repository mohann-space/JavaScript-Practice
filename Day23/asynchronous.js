function demo(a,b){
    setInterval(()=>{
        for(let i=a;i<=b;i++){
            console.log(i);
        }
    },5000)
}
demo(10,"20a")
function d1(){
    console.log("hello");
}
d1()


let date = new Date()
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.toTimeString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());

let h1 = document.getElementById("d1")
function time(){
    let date1 = new Date()
    // console.log(date1.toLocaleTimeString());
    h1.innerText = date1.toLocaleTimeString()   
}
let x = setInterval(time,1000)
let btn = document.querySelector("#btn")
btn.onclick=()=>{
    clearInterval(x)
}

let btn1 = document.querySelector("#btn1")
btn1.onclick=()=>{
    x=setInterval(time,1000)
}

let inc = document.querySelector("#inc")
let dec = document.querySelector("#dec")
let sp = document.querySelector("span")

inc.onclick=()=>{
    sp.innerText++
}
dec.onclick=()=>{
    if(sp.innerText>1){
        sp.innerText--
    }
}