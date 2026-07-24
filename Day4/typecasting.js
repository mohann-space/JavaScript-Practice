//IMPLICIT TYPECASTING
let a=10, b="20" 
console.log (a+b); 
console.log(a*b); 
console.log(a-b); 
console.log(b%a);
//console.log(b) ;

//console.log(b++);
//console.log(b);
//console.log(a+b);

console.log(true*a*b*true+false) ;
console.log(true+false*b-a*false+true-20);
console.log(false*true+"20"*a*"20a"-true+false*false);

//EXPLICIT TYPECASTING
let x=10, y="20" 
console.log(x+Number(y));
console.log(String(x)+Number(y));
console.log(String(20)+Number("30")*Boolean(50)-Boolean(0)*Boolean("51"));
console.log(5*6+Number("501a")*80+true-false+String(true)+Boolean("90"));
console.log(String(undefined));
console.log(Number(undefined));
console.log(String(null));
console.log(Number(null));
console.log(String(NaN)); 
console.log(typeof NaN);
console.log(isNaN);
