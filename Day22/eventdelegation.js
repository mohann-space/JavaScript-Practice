let gp=document.getElementById("gp")
let p=document.getElementById("p")
let child=document.getElementById("child")

// Event delegation
gp.addEventListener("click",(e)=>{
    // console.log(e);
    // console.log(e.target.id);
    // console.log(e.target.innerText);
    // console.log(e.screenX);
    // console.log(e.screenY);

    if(e.target.id=="gp"){
        console.log("grand parent clicked");
        e.target.style.backgroundColor="aqua"
    }
    else if(e.target.id=="p"){
        console.log("parent clicked");
        e.target.style.backgroundColor="red"
    }
    else if(e.target.id=="ch"){
        console.log("child clicked");
        e.target.style.backgroundColor="yellow"
    }
})