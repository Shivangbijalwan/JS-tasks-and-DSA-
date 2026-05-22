// this is try catch and errors handling it 

let a = prompt("enter the first number");

let b = prompt("enter the second number");


// let sum = a+b ; // these variable get the value in string 
let sum = parseInt(a)+parseInt(b) ;  //parseInt changes string value to number ,
// it also help to get errors form user mistakes


// to get rid of this a check will help us 
if(isNaN(a)|| isNaN(b)){
    throw SyntaxError("this is not allowed")
}


try {
     console.log("the sum is" , sum*x);    
} catch (error) {
    console.log("Error aagaya bhai")
} finally {
    console.log("files are closed and all the connections are removed from database!!!")
}

// finally is used when the code is in function and having return fun that is not executing the left over code the finally will not been stopped to execute and will be there in any case