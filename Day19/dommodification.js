// 
let b=document.body
console.log(b);

console.log(b.firstElementChild);
console.log(b.firstElementChild.textContent);
b.firstElementChild.textContent="Hello JS"
console.log(b.firstElementChild.textContent);
b.firstElementChild.textContent+=" Amigos"
console.log(b.firstElementChild.innerText);
console.log(b.innerHTML);
b.innerHTML+="<h4>hello h4</h4>" 
b.innerText+="<div>hello div</div>"


