//delay of 2 seconds 
//setTimeout(arg1,arg2); -> arg1 as function and arg2 as time 

setTimeout(()=>{       //asynchronous JS
    console.log('one');
    callback();
},1000);

console.log('two');
//output will be 
//two 
//one 

//when using callback function
setTimeout(()=>{
    console.log('one');
    callback();
},1000);

let callback = () =>{
    console.log('two');
} 

//output will be 
//one 
//two
