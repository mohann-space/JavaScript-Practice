//SIMPLE IF
if(15>6){
    console.log("good morning");
} 
//IF-ELSE
if(5>6){
    console.log("good morning 🌅");
}
else{
    console.log("good bye fellows😉");
}
//ELSE-IF LADDER
if(4>8){
    console.log( "Hi");
}
else if(3==4){
    console.log("tata");
}
else if(5>14){
    console.log("hello");
}
else{
    console.log("amigo");
}
//NESTED IF
if(4<=9){
    if(5=="5"){
        console. log("hi");
    }
    else{
        console.log("hello");
    }
}
else{
    console.log("tata bye bye");
}
//Switch case
let x="D"
switch(x){
    case "B":console.log("it is consonent");break;
    case "C":console.log("it is consonent");break;
    case "A":console.log("it is vowel"); break;
    case "D":console.log("it is consonent");break;
    default:console.log("it is not a consonent or not a vowel");
}
// LOOPING STATEMENT
for (let i=1;i<=5;i++){
    console.log("hello");
    console.log("\n");
}
for(let i=1; i<-5;i++){
    console.log("hi");
}
let s=""
for(let i=1;i<=5;i++){
    s+="hello "
    //s=s+"hello"
}
console.log(s);
let s1=""
for(let i=1;i<=5;i++){
    s1+="hello" 
    s1+="\n"
    //s=s+"hello"
}
console.log(s1);

for(let i=1;i<=5;i++){
    console.log("hello" +i);
}