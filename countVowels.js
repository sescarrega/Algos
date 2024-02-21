//  given a string, write a function that counts the number of vowels ('a','e','i','o','u', 'A','E','I','O','U'), 
// found in a string

const countVowels = (s)=>{
    let count=0;// initialize counter
    let vowels = ['a','e','i','o','u', 'A','E','I','O','U'];
    let res =s.split('');// make string into an array 
    // initialize loop for s
    for (i=0; i < res.length; i++ ){
        if(vowels.includes(res[i])){
            count++;
        }
    }
    return count;
}

console.log(countVowels('Sabrina')); // 3
console.log(countVowels('Escarrega')); // 4
console.log(countVowels('Amazing')); // 3