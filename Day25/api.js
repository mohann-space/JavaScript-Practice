let btn = document.querySelector("button")
let inp = document.querySelector("input")
let div = document.querySelector("div")
// btn.addEventListener("click",(e)=>{
//     // console.log(e.target);
//     console.log(inp.value);
//     window.fetch(`https://pixabay.com/api/?key=45607892-ebf247843c7e2f1530f4fcac1&q=${inp.value}&image_type=photo/per_page=40`)
//     .then((x)=>x.json())
//     .then((data)=>{
//         console.log(data);
//         for(let i of data.hits){
//             console.log(i.largeImageURL);
//             div.innerHTML+=`<img src=${i.largeImageURL}>`
//         }
//     })
//     inp.value=""
// })
btn.addEventListener("click",async(e)=>{
    div.innerHTML = "";
    console.log(inp.value);
   let x = await window.fetch(`https://pixabay.com/api/?key=45607892-ebf247843c7e2f1530f4fcac1&q=${inp.value}&image_type=photo`)
    let data = await x.json()
        console.log(data);
        for(let i of data.hits){
            console.log(i.largeImageURL);
            div.innerHTML+=`<img src=${i.largeImageURL}>`
        }
    inp.value=""
})