// ARRAYS IN JS (DSA)

// contains multiple Datatypes
/*
let arr = [];
arr.push(100)
arr.push(150)
arr.push(230)
arr.push(340)
arr.push(false)
arr.push("sbi")
console.log(arr);

console.log(arr[3]);

console.log(arr.pop());

arr[7]=150 
console.log(arr[7])


//creating loop array

arr = new Array(5);
for(let i=0 ; i<arr.length; i++) {
   arr[i] =  prompt("Enter a number :");
}
console.log(arr);


// array sum 

let arr = [10 , 20, 30 , 50];
let sum = 0;
for (let i=0; i<arr.length; i++){
  sum = sum + arr[i]; 
}
console.log(sum);
*/


let arr = [20 , 80 , 10 , 50 , 30];
let max = arr[0];
for (let i=1 ; i<arr.length ; i++){
  if (max<arr[i]){
    max=arr[i];
  }
}
console.log(max);

