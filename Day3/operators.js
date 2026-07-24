let a=10,b=20
// Arthimatic
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b%a);
console.log(b/a);
// Post
console.log(a++);
console.log(a); //11
//Pre
console.log(++b);
console.log(b); //21
//Post Decrement
console.log(a--);
console.log(a);
//Pre Dec
console.log(--b);//20
console.log(b);//20
//Exponential Power
console.log(2**5);

//Assignment
let x=10,y=20
console.log(x+5);
console.log(x);
x+=5
console.log(x);
console.log(y-=5);
console.log(y);
console.log(x*=2);
console.log(x/=2);
console.log(x%=3);
console.log(y**=2);

// Relational
console.log(5=="5");//True
console.log(5==5);//True
console.log(5!="5");//False
console.log(5==="5");//False
console.log(5===5);//True
console.log(5!=="5");//True
console.log(5>7);//False
console.log(6<5);//False
console.log(4>=5);//False
console.log(4<=5);//True

//Logical (OR)
let w=30,e=20,s=25,t=10
console.log((w<e) || (s<t));//False
         // False    False
console.log((w>e) || (s<t));//True
         // True     false
console.log((w<e) || (s>t));//True
         // False     True
console.log((w>e) || (s>t));//True
         // True     True
//Logical (AND)
console.log((w<e) && (s<t));//False
         // False    False
console.log((w>e) && (s<t));//False
         // True     False
console.log((w<e) && (s>t));//False
         // False    True
console.log((w>e) && (s>t));//True
         // True     True

//Logical (Not)
let r=true 
console.log(!r);//False
        





