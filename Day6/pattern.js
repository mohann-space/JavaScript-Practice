let a=100,b=20,c=500,d=600
let res=a>b?"a is gr":"b is gr"
console.log(res);

let temp=a>b?(a>c?"a is gr":"b is gr")
                :(b>c?"b is gr":"c is gr")
console.log(temp);

let temp1=a>b?(a>d?(a>d?"a is gr":"d is gr")
                 : (c>d?"c is gr":"d is gr"))
                : (b<c? (b>d?"b is gr":"d is gr")
                 : (c>d?"c is gr":"d is gr"))
console.log(temp1);

//---------------------------------------------------------

let str=""
for(let j=1;j<=3;j++){
    for(let i=1;i<=3;i++){
        str+="* "
    }
    str+="\n"
}
console.log(str);

//----------------------------------------------------------------

//document.write("hello js")
//document.write("hello")

//document.writeln("hi")
//document.writeln("h1")
//document.writeln(" <br> ")
//document.writeln("hi2")

let str1=""
for(let j=1;j<=3;j++){
    for (let i=1;i<=3;i++){
        // str+="* "
        document.writeln("*")
    }
    //str+="\n"
    document.writeln(" <br> ")
}
document. write(str1);

//-----------------------------------------------------------------------------------

let str2=""
for(let j=1;j<=5;j++){
    for(let i=1; i<=j;i++){
        //str+="* "
        document.writeln("*")
    }    
    //str+-"\n"
    document. writeln("<br>")
}        
document.write(str2);

//----------------------------------------------------------------------------------

let str3="",space=4
for(let i=1; i<=5;i++){
    for(let j=1;j<=space;j++){
        str3+=" "
    }
    for(let k=1;k<=i;k++){
        str+="*"
    }
    str3+="\n"
    space--
}
console.log(str3);
