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

// maximum number in array

let arr = [20 , 80 , 10 , 50 , 30];
let max = arr[0];
for (let i=1 ; i<arr.length ; i++){
  if (max<arr[i]){
    max=arr[i];
  }
}
console.log(max);


// minimum number in array

let arr = [20 , 80 , 10 , 50 , 30];
let min = arr[0];
for (let i=1 ; i<arr.length ; i++){
  if (min>arr[i]){
    min=arr[i];
  }
}
console.log(min);


let arr = [13, 23, 33, 43, 53, 63];
let i = 0, j = arr.length - 1;

while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}

console.log(arr); // [63, 53, 43, 33, 23, 13]

// left rotation by 1

 let arr = [1,2,3,4,5]
 let copy = arr[0];
 for(let i=0 ; i<arr.length-1 ; i++){
  arr[i] = arr[i+1]
 }
 arr[arr.length-1] = copy;

 console.log(arr);


// right rotation by 1

let arr = [1,2,3,4,5]
let copy =arr[arr.length-1];
for(let i=arr.length-1 ; i>0; i-- ){
  arr[i] = arr[i-1]
}
arr[0] = copy;
console.log(arr);


//nesting in loop
for (let j = 1; j <= 4; j++) {
    console.log(j + " exectutuion")
  for (let i = 0; i <= 3; i++) {
    console.log("hello world");
  }
}
  

// k step
let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter a number: "));

for (let j = 0; j < k; j++) {
  let copy = arr[0];
  for (let i =0; i<arr.length-1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length-1] = copy;
}

console.log(arr);

*/


