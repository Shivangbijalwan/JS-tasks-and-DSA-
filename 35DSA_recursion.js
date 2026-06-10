// This is Recursion in DSA 

// A function calling again and again until it reaches a end point

/*
// n to 1
function num(n) { 
    if(n==0) {
        return;
    }
    console.log(n);
    num(n-1);
}

num(prompt("Enter a number: "));
*/

/*
// 1 to n backtracking 
function num(n) { 
    if(n==0) {
        return;
    }
    num(n-1);
    console.log(n);
    
}

num(prompt("Enter a number: "));
*/

//sum of n numbers
/*
function sum(n){
    if(n==1) return 1;  
    return n + sum(n-1);
}
console.log(sum(5))
*/


/*
function temp(n){
    if (n===0)return
   console.log(n)
   temp(n-1);
}

temp(10)
*/


function temp(n){
    if(n===0) return
    temp(n-1)
    console.log(n)
}

temp(10)