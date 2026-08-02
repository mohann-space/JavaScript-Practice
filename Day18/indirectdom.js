let h2=document.getElementById("heading")
console.log(h2);
let cls=document.getElementsByClassName("para")
console.log(cls);
let h1=document.getElementsByTagName("h1")
console.log(h1);
let section=document.getElementsByName("sec")
console.log(section);
let aside=document.querySelector("#aside")
console.log(aside);
console.log(document.querySelector("h1"));
let collection=document.querySelectorAll("h1")
console.log(collection);
console.log(document.querySelectorAll("div aside"));

let header=document.querySelector("header")
console.log(header);

console.log(header.childNodes);

let container=document.querySelectorAll(".container")
container.innerHtml="Bye"
console.log(container);








