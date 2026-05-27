//1- BUBBLE SORTING

//how it works for ascending order

//[10 , 5, 1, 12, 3]
// let 1st element or 0 index number is bubble element (here "10" is bubble element)
// swap to the right one if its bigger than that 
// if its not bigger than right element we have to pass to right element
// now 12 is the bubble element 
// swap to the right one if its bigger than that
// if bubble element is at its perfect place  the perfect place is last index of the array
// phase 2 has been started as any one bubble has been fixed in its place 
// now new phase to be started till phase-1
// make a new bubble element which is in the 0 index
// repeat this all till it sort (in ascending order)

// code for bubble sort
/* 
let arr = [10, 5, 1, 12, 3];
for(let i=0 ; i<arr.length-1 ; i++){
  for(let j=0 ; j<arr.length-1-i; j++ ){
     if(arr[j]>arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
     }
  }
}
console.log(arr)
*/


//2 - SELECTION SORTING

// let [10, 5, 1, 12, 9]

//inside the array start from 1st index to last
//find the smallest element inside the unsorted array
// swap it from 0th index if its small then it 
// repeat till end

//code for Selection sorting

/*
let arr = [10, 5, 1, 12, 9];

for(let i=0 ; i<arr.length-1 ; i++){
    let min = i;
    for(let j=i+1 ; j<arr.length ; j++){
      if(arr[min]>arr[j]){
       min = j ;

      }
      if (min != i){
        let temp = arr[min];
        arr[min] = arr[i]
        arr[i] = temp
      }
    }
}
console.log(arr);
*/



//3 - INSERTION SORTING

//arr = [5, 10, 1, 8, 13, 7]
//start from 1st index  (i) and its a key
// 2nd pointer from 0th index or from i-1 (j) 
// if j element is > then key
// j+1 == j
//j-- 
// check if j = 0 && <0
//j++
//j+1 = key

let arr = [5, 10, 1, 8, 13, 7];
for (let i = 1 ; i < arr.length ; i++){
    let key = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > key){
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
}
console.log(arr);
