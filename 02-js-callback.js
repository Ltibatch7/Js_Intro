


let fun = (a,b)=>{
    console.log(a+b);
}

fun(1,3);//function invoke or call

let x=1;
let y=3;
fun(x,y);

fun('abc','bcd');

//c -> strongly typed language
//int num = 10; 

//JS -> dynamically typed language
let num = "abc"; 


fun2 = () =>{
    console.log("fun2");
}
fun2();

fun3=(arg)=>{
    console.log(arg);
}
let arg=20;
fun3(arg);

// function can accept any types of argument 
//  - function as argument to another function 
//  - object as argument to function