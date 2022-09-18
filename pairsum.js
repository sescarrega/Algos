//===Pair Sum===
//Write a function, pairSum, that takes in an array and a target sum as arguments. 
// The function should return an array containing a pair of indices whose elements 
// sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

// e.g. parSum([3,2,5,1], 8) -> [0,2]
//             so notice that there is an array and a digit next to eachother 
//             the digit signifies what the desired sum is AND the function is 
//              supposed to return the indices where that is true, 
//              however note that you only need the first instance where that is true
//              AND note that the promt ask that the indices must be true



// brute force technique 
//  we can use a nested loop technique where we utlizise two pointers 
//  the first will iterate through the indices to check if the value at the index 
// is within the desire sum. If that is true then the next pointer will pick up where the 
// first pointer left off and begin iterating through the array checking for a value that combined 
// with the value at the first poniter will return the desired sum.  However if the the second pointer 
//has finished iterating through the array without finding a match the fist pointer will then have to iterate through the 
// array  and begin the pocess until the desired sum is made. 


// const pairSum=(numbers, targetSum) =>{
//     for(let i=0; i < numbers.length; i+= 1){
//         for( let j= i+1; j< numbers.length; j+=1){
//             if(numbers[i]+numbers[j]===targetSum){
//                 console.log("the sum of", numbers[i] ,"+",numbers[j], "=", targetSum );
//                 console.log("pairSum=",[i,j]);
//                 return[i,j];
//             }
//         }
//     }
// };
// pairSum([1,6,9,12],10);



//===== the time complexity is not optimal =====

////  key concept hashed map / table 
// a hash map is similar to an array however in a hash map you assign the keys and values 
// in JS we will store this information as an object 








