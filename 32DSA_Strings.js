// this is DSA 2 STRINGS in js 

/*
let s = "            shivang          "

console.log(s.slice(0,5));

console.log(s.concat(" world"));

console.log(s.trim(s));

console.log(s.charCodeAt(2));

*/
/*
//print each character of string in new line

let s = "shivang";

for(let i = 0; i<s.length ; i++){
    console.log(s[i]);
}

*/

/*

//print each character of string in new line but reverse

let s = "shivang";

for(let i =s.length-1; i>=0 ; i--){
    console.log(s[i]);
}

*/


/*
// print in reverse order

let s = "shivang";
let r = "";
for(let i =s.length-1; i>=0 ; i--){
    r = r+s.charAt(i);
}
console.log(r);

*/

// check the string is palindrome
// malayalam , Naman , abba 

/*

let s = prompt("Enter a string:");
let r = "";
for(let i =s.length-1; i>=0 ; i--){
    r = r+s.charAt(i);
}
if (r == s) console.log("its a palindrome");
else console.log("no it's not a palindrome");

*/


// check palindrome with two pointers


/*
let s = prompt("Enter a string:");
let ispalindrome = true
let i=0 , j=s.length-1 
while(i<j){
    if(s.charAt(i)!= s.charAt(j)){
        ispalindrome = false;
        break;
    }
   i++
   j--
}
if(ispalindrome) console.log("its a palindrome");
    else console.log("no palindrome");

 */


// toggle a string

/*
let s= prompt("enter a sting: ");
console.log(s)

let toggle = "";
for (let i=0 ; i<s.length ; i++){
    let ch = s.charCodeAt(i);

    if (ch>=65 && ch<=90){
       toggle = toggle + String.fromCharCode( ch+32)
    }
    if (ch>=97 && ch<=122){
       toggle = toggle + String.fromCharCode( ch-32)
    }
}
console.log(toggle);

*/

// frequency of each character 

let s = prompt("enter a string: ");
let arr= new Array(128).fill(0);


for(let i=0 ; i<s.length ; i++){
    let indx = s.charCodeAt(i);
    arr[indx] = arr[indx]+1;
}
for(let i =0 ; i<arr.length; i++){
    if (arr[i]>0)
        console.log(String.fromCharCode(i)+" apperas at " + arr[i] + " times ")
}
