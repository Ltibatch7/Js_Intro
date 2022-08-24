// function can accept any types of argument 
//  - function as argument to another function 
//  - object as argument to function


//function as a agrument to another function

let fun = (arg) => { // 2 function definition
    console.log("function");//3
    arg(); // 4 function call //callback
}

let fun1 = () =>{ // 5. function definition  //callback function 
    console.log("another function"); // 6
}
fun(fun1); // 1 function call

fun(() => console.log("anonymous function"));




