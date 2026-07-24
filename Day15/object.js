// Literal way
let obj={}
console.log(obj);

let obj1={
    carname :"G-wagon",
    price : "2.5cr",
    wheels : 5
}
console.log(obj1);
console.log(obj1.carname);
console.log(obj1.price);
console.log(obj1.wheels);

// new keyword
let obj2 = new Object()
console.log(obj2);

// constructor
let obj3 = Object()
console.log(obj3);

// Function constructor
function demo(name,id){
    this.name=name
    this.id=id
}
let a = new demo("web",123)
console.log(a);
console.log(a.name);

let obj4 = Object()
console.log(obj4);

// Insertion
obj4.name="abc"
console.log(obj4);
obj4.id=123
console.log(obj4);
obj4.role="web dev"
console.log(obj4);
obj4.sal="12Lpa"
console.log(obj4);

//Updation
obj4.role="Senior web dev"
console.log(obj4);
obj4.sal="20Lpa"
console.log(obj4);

// Deletion
delete obj4.role
console.log(obj4);
delete obj4.id
console.log(obj4);

// Read
console.log(obj4.name);
console.log(obj4.sal);











