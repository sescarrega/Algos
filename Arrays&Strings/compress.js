//  write a s function that takes in a string as a function. The input is a srting like 'book' and the out put is b2ok. notice that single occurences
// are not enumerated, whereas letters with multiple occurences are enumerated. also we are only working to find consectuive occurences. 

// Approach 
// lets use two pointers where if i and j are equal to each other multiple times then we add one to the count as well as the char
// so if there is only one b then it is "sliced" and added directly into the new string but if there is a char with consecutive occurence the loop will have a 
// counter enumerating the iterations made before the secondary pinter would catch up to it. 
// there also has to be an empty srting so we can append the results 

// const compress1 = (s) => {
//     let result = "";
//     let j = "";
//     let i = "";

//     for(let i=0; i < s.length; i++){
//         if (s[i] == s[j]){ // if i and j are the same  then we move j along by one 
//             j+= 1;

//         } else{
//             result += s[i];// but if i and j are not equal we will add i to the empty string 
//         } while{ 

//         }

//     }
// }

//  guidance from dr.T
// function compressString(s) {
//     Initialize result as an empty string
//     Initialize i to 0

//     while i < length of s {
//         Initialize j to i
//         while j < length of s AND s[j] == s[i] {
//             Increment j
//         }

//         if j - i > 1 {
//             Append s[i] and j - i to result
//         } else {
//             Append s[i] to result
//         }

//         Set i to j
//     }

//     return result
// }

const compress = (s) =>{
    let result = "";
    for(let i = 0; i < s.length; ){// notice we're not incrimenting i here
        let j = i; // initialize j to i at the start of every loop iteration 
        while( j< s.length &&  s[j] == s[i]){
            j++; // we'll move j forward as long as the characters are the same as each other 
        } // now lets check the number of occurences 
        if (j - i > 1){// if there is more than one occurence 
            result += s[i] + (j-i); // append the character and the count 
        } else{
            result += s[i]; // but if its just one occurence then only append the single character 
        } 
        i = j; // remember j increments as long as j & i are equal , here we set i to j 
    }
    return result; 
};

console.log(compress('hammer'));
console.log(compress('ample'));
console.log(compress('stress'));
console.log(compress('frrrrrrrogssssss'));

// Example usage
// console.log(compress("book")); // Expected output: "b2ok"

// const compress = (s) => {
//     let result = "";
//     let i = 0;
//     while (i < s.length) {
//         let j = i;
//         while (j < s.length && s[j] == s[i]) {
//             j++;
//         }
        
//         // Append character
//         result += s[i];
        
//         // Calculate count of consecutive characters
//         let count = j - i;
        
//         // Append count if more than 1
//         if (count > 1) {
//             result += count;  // This is where we append the count correctly
//         }
        
//         // Move to the next set of characters
//         i = j;
//     }
//     return result;
// };
