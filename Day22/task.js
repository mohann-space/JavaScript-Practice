let form=document.querySelector("form")
console.log(form);
let inp1=document.querySelector("inp1")
console.log(inp1);
form.addEventListener("click",(e)=>{
    e.preventDefault()
    // console.log(e.target.innertext);
    if(e.target.innerText=="search"){
        console.log(inp1.value);
        let map=`https://www.google.com/maps/place/${inp1.value}`;
        // window.open(map)
        window.location.href=map
        inp1.value=""   
    }
})

let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    console.log(window.navigator.geolocation.getCurrentPosition((x)=>{
        console.log(x);
        let lat=x.coords.latitude;
        let log=x.coords.longitude;
        let map=`https://www.google.com/maps/place/${lat},${log}`;
        window.open(map)
    }));

})