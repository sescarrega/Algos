// lets write a function that takes  numbers as an argument then have it return t/f statment 
// wether or not the number is prime  (prime numbers are only divisible by one or itself)
// lets assume the number is a positive interger 

// what your approach ?
// i think i want it to be  n/n or n/1  and if there is a remainder then we can have  the function prin the boolean 
// we can use modulo 

// const isPrime =(n) =>{
//     if (n < 2) return false;

//     // lets not start at 1 because it will of courdse divide into itself
//     // for (let i =2; i <= Math.sqrt(n); i += 1){ this is a bit more advanced version 
//         for (let i =2; i < n; i += 1){// this way is correct as well but more iterations have to be made 
//             // on line 14 we're setting i equal to 2,This is because
//             // all numbers are divisible by 1, so starting with 1 would not be useful for determining primality.
//         if (n % i == 0) return false;
//     }
//     return true; 
// }; 

// the more rudimnetary way id not good for large cases because it would have to do so many iterations  if youre looking to see if 200 is a pprime number
// it would have to do 199 iterations

const isPrime =(n) =>{
    if (n < 2) return false;

    // for (let i =2; i <= Math.sqrt(n); i += 1){ this is a bit more advanced version
        for (let i =2; i < n; i += 1){
        if (n % i == 0) return false;
    }
    return true;
};
console.log(isPrime(222))
console.log(isPrime(13))
console.log(isPrime(7))
console.log(isPrime(1))


