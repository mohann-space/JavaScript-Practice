let gp=document.getElementById("gp")
let p=document.getElementById("p")
let child=document.getElementById("child")

gp.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="red"
    console.log("grand parent clicked");
    
},false)
p.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="Yellow"
    console.log("parent clicked");
})
ch.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="pink"
    console.log("child clicked");
})

let gp1=document.getElementById("gp1")
let p1=document.getElementById("p1")
let p2=document.getElementById("p2")
let ch1=document.getElementById("ch1")
let ch2=document.getElementById("ch2")
let gch1=document.getElementById("gch1")

gp1.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="red"
    console.log("grand parent clicked");
    
},false)
p1.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="Yellow"
    console.log("parent 1 clicked");
})
p2.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="blue"
    console.log("parent 2 clicked");
})
ch1.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="pink"
    console.log("child 1 clicked");
})
ch2.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="green"
    console.log("child 2 clicked");
})
gch1.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.target.style.backgroundColor="lightgrey"
    console.log("grand child clicked");
})