// Retrieve user data from Local Storage
let name=window.localStorage.getItem("name")
console.log(name);
let em=window.localStorage.getItem("email")
console.log(em);
let pwd=window.localStorage.getItem("password")
console.log(pwd);

// Retrieve user data from Session Storage
let name1=sessionStorage.getItem("name")
console.log(name1);

// Display stored Cookies 
console.log(document.cookie);




