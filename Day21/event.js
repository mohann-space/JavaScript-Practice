function demo(){
    console.log("hello event");

    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    console.log(r,g,b);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`
}

function demo1(){
    document.body.style.backgroundColor="white"
}

let d = document.getElementById("d1")
console.log(d);
d.onclick=()=>{
    document.body.style.backgroundColor="red"
}


