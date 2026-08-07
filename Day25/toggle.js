let reg = document.querySelector("#reg")
let form = document.querySelector("form")
reg.addEventListener("click",()=>{
    let d = form.classList.toggle("none")
    console.log(d);
    if(d){
        form.style.display="block"
    }
    else{
        form.style.display="none"
    }
})

let cart = document.querySelector("#cart")
let aside = document.querySelector("aside")
cart.addEventListener("click",()=>{
    aside.style.transform="translateY(0px)"
    aside.style.transitionDuration="5s"
})
aside.firstElementChild.addEventListener("click",()=>{
    aside.style.transform = "translateY(-1000px)"
    aside.style.transitionDuration="5s"
})
let sec = document.querySelector("section")
let cartItems = document.querySelector("#cartItems");

sec.addEventListener("click",(e)=>{
    if(e.target.innerText=="Add to cart"){
     
        cartItems.innerHTML += `<div>
                                <h3>Product ${e.target.previousElementSibling.innerText}</h3>
                                <button class="inc">+</button>
                                <span>1</span>
                                <button class="dec">-</button>
                                </div>`;
    }
})

cartItems.addEventListener("click",(e)=>{
    if(e.target.classList.contains("inc")){
        let span = e.target.nextElementSibling;
        span.innerText = Number(span.innerText) + 1;
    }

    if(e.target.classList.contains("dec")){
        let span = e.target.previousElementSibling;

        if(Number(span.innerText)>1){
            span.innerText = Number(span.innerText) - 1;
        }
    }
});
