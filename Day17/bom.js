// let name=window.prompt("enter your name")
// console.log(name);
// document.writeln(name)
// let pwd=window.prompt("enter your password")
// console.log(pwd);
// document.writeln(pwd)

// let ph=Number(prompt("enter your number"))
// console.log(ph);
// document.writeln(ph)

// let c=window.confirm("this your confirmation msg")
// console.log(c);

// let d=alert("this your alert msg")
// console.log(d);
// console.error("this your error msg")
// console.warn("this your warning msg")


let nm=prompt("enter the table number")
let start=prompt("Enter the starting Number")
let end=prompt("enter the ending number")
console.log(nm,start,end);
function table(nm){
    for(let i=start;i<=end;i++){
        console.log(`${nm}*${i}=${nm*i}`);
        document.writeln(`${nm}*${i}=${nm*i}`)
        document.writeln
    }
}
table()

