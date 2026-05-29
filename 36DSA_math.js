/*
function gcd(a , b){
    if(a==b) return a;
    if(a>b) return gcd(a-b , b);
    return gcd(a,b-a);
}

let a =32 , b = 20;

console.log(gcd(a , b)); 
*/

/*
function gcd(a,b){
    if(b==0) return a
    return gcd(b,a%b);
}*/

// Factors of number
let n = 100
for(let i=1 ; i<=Math.floor(Math.sqrt(n));i++){
    if(n%i==0){
        console.log(i+"")
        console.log(n/i+"")
    }
}