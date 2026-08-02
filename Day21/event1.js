let btn =  document.querySelector("button")
console.log(btn);
btn.addEventListener("click",(e)=>{
    console.log(e);
    console.log(e.target);
    console.log(window);
    console.log(window.navigator.onLine);
    if(window.navigator.onLine){
        // console.log(e.target.innerText);
        e.target.innerText="Online 😁"
    }
    else{
        e.target.innerText="Offline 😕"
    } 
})

let share = document.getElementById("share")
share.addEventListener("click",()=>{
    console.log(window.navigator.mediaDevices.getDisplayMedia());
})

let cam = document.getElementById("cam")
console.log(cam);
let vi = document.querySelector("video")
cam.addEventListener("click",()=>{
    console.log(window.navigator.mediaDevices.getUserMedia({audio:true,video:true})
.then((src)=>{
        vi.srcObject=src
}));   
    
})
