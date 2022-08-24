class First_class{
    constructor(){} 

    funcMethod = () =>{
        console.log("HelloWorld");
    }
}

//JS object are two types 
//1. Objects of a class
let a = new First_class();
a.funcMethod();


// proper JS objects
//Object can contain primitive data, nested object and array
let emp = {
    eid:100,
    ename:"praveen",
    salary:30000,
    email:"praveen@gmail.com",
    address:{
        dno:34,
        city:"chennai",
        pincode:626105,
        state:"tamilnadu"
    },
    phno:[8754702144,9842790068]
}; 

console.log(emp);
console.log(emp.ename);
console.log(emp.address.city);


objname = {p1:'v1', p2:'v2'};
arrayname =[12,34,45];
console.log(arrayname[1]);


