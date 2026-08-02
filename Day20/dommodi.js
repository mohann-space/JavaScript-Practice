let b=document.body
console.log(b);
// let c=b.innerHTML+=`<table border=2px solid height=200px width=200px>
//                     <tr>
//                         <td>html</td>
//                         <td>css</td>
//                     </tr>
//                     <tr>
//                         <td>java</td>
//                         <td>python</td>
//                     </tr>
//                 </table>`
// console.log(c.firstElementChild.firstElementChild);
// console.log(c);
// console.log(b);
// console.log(b.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild);

let t =document.createElement("table")
console.log(t);
b.append(t)

let tr1=document.createElement("tr")
let tr2=document.createElement("tr")
t.append(tr1)
t.append(tr2)

let td1=document.createElement("td")
tr1.appendChild(td1)
let td2=document.createElement("td")
tr1.appendChild(td2)

let td3=document.createElement("td")
tr2.appendChild(td3)
let td4=document.createElement("td")
tr2.appendChild(td4)
// t.style.border="2px solid"
t.setAttribute("border","2px solid")
t.style.height="200px"
t.style.width="200px"
t.style.borderColor="black"
td1.innerText="html"
td2.innerText="CSS"
td3.textContent="Java"
td4.innerHTML="JS"
td1.style.backgroundColor="red"
t.setAttribute("cellpadding","20px")
td2.style.backgroundColor="blue"
td3.style.backgroundColor="green"
td4.style.backgroundColor="yellow"
t.style.color="white"
t.setAttribute("cellspacing","0px")
td1.setAttribute("colspan","2")
td2.remove()
td1.style.textAlign="center"
t.style.fontSize="25px"

let img=document.createElement("img")
console.log(img);
b.append(img)
img.setAttribute("src","path")
img.setAttribute("alt","Give proper path")
img.style.height="200px"
img.style.width="300px"
img.style.border="1px solid"