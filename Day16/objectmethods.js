let obj={
    name:"abc",
    id:123,
    role:"web",
    sal:"1cr"
}
console.log(obj);
console.log(obj.name);
obj.name="xyz"
console.log(obj.name);
obj.address="hyd"
console.log(obj);
console.log(Object.isSealed(obj));

// Seal
Object.seal(obj)
console.log(Object.isSealed(obj));

// insertion is not possible
obj.name="pqr"
console.log(obj);

// updation is possible
obj.id=987
console.log(obj);

// deletion is not possible
delete obj.id
console.log(obj);

// freeze
console.log(Object.isFrozen(obj));
Object.freeze(obj)
console.log(Object.isFrozen(obj));

// insertion is not possible
obj.name="daebc"
console.log(obj);

// updation is not possible
obj.id=2840
console.log(obj);

// deletion is not possible
delete obj.id
console.log(obj);

let k=Object.keys(obj)
console.log(k);
for(let i of k){
    console.log(i);
}

let v=Object.values(obj)
console.log(v);
for(let i of v){
    console.log(i);
}

let kv=Object.entries(obj)
for(let i of kv){
    console.log(i);
}


let obj2={
    name:"xyz",
    id:123
}
console.log(obj2);

let obj3={
    address:"hyd",
    id:5678
}
console.log(obj3);

//assign
let r=Object.assign(obj2,obj3)
console.log(r);

// JSON

let obj4={
    name:"ijk",
    id:986
}
console.log(obj4);
let d=JSON.stringify(obj4)
console.log(d);
console.log(JSON.parse(d));






