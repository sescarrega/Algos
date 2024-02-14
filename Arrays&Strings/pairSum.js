//  write a function that takes in an array and a target sum, return a pair of indices whose 
// elements equal the given target. the indices must be unique. 
//  [10,2,9,5,2,3,1] target sum -> 5 
//  the input will look like this pairSum([2,5,9,8,3,1],3) 
// notice that the number three is in the array, however we need to find a pair of indices whose sum is three. 

// intial thoughts 
// itinalize an empty array
// then iterate over the array given, subtract Arr[i] from target sum and find the remainder
// if the remainder is not present move to the next [i] until  the two indices equal the target sum 
// if the two indice values are equal to the target sum then append the indices into the empty arr and return the new array 

// the problem here might be that you havent seperated the array and they target value seeing as the input is ([array], targetSum)
// how will uou do this ? 

// also lets only incriment Arr[i] if the remainder from (Arr[i] - targetSum) > 0, if it is at zero we do not want that value 
// because we need a pair. in addition  if  (Arr[i] - targetSum) > targetSum we do not want that because then the number would
//  be greater than the target value 

// guided walk through 
// okay so the way you were suggesting is a brute force way of doing it and it can be a bit more elegant
// instead lets use a hash map  also were looking for the complement 
// when iterating thru the array lets use a hash map have the key be the value of arr[i] and the value of the key will be [i] 
// so to begin intialize an empty obj, then iterate thru input arr( here lets find the complement ) if the complement is in the 
//  obj then we're done however if its not then we add to the obj so we can reference it in our next iteration 
// then lets return the values of the key which would be our pair of indices 

// *remember your question*
// the problem here might be that you havent seperated the array and they target value seeing as the input is ([array], targetSum)
// how will uou do this ? 

// so this a is a bit silly and misdirect , you were thinking your function will be seeing these as inter-connected but 
// they're not  look back to the direction and you see the argument taks the two seperately ([array], targetSum) the arguments are distinct
// its two diff parameters

// const pairSum =(arr, targetSum) =>{
//     // initialize empty obj
//     let complements = {};
//     // iterate thru arr
//     for (i = 0; i < arr.length; i++){
//         // calulate the complement by subtracting targetSum from arr[i]
//         let complement = 0; // we need somewhere to hold 
//         complement = targetSum - arr[i]; // and identify our complement 
//         if (!(complement in complements)){ // if our complement is not in complements then
//             complements[complement] = i; // lets establish this complement and assign the value as the indices where it is found
//         }// but if it is in complements then return result and its over 
//         // return complement + arr[i]; // !! notice your return statement is within the loop which means it will exit after the first iteration  and you're getting the value of arr[i] when you only need [i] 
//     }
//     // let return here outside of the loop
//     return console.log(complements ,arr[i]);
// }

// console.log (pairSum([10,8,9,1,6,9,7], 8));

// that was a decent crack but needs lots of corrections 
// storing indices -- store an index in complements ->  complements[arr[i]] = i 
// adjust return logic to return a pair 

// solution from dr.T
const pairSum = (arr, targetSum) => {
    // Initialize an object to track the complements and their indices
    let complements = {};

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Calculate the complement by subtracting the current element from the target sum
        let complement = targetSum - arr[i];

        // Check if the complement exists in the complements object
        if (complement in complements) {
            // If it exists, return the pair of indices: [the stored index of the complement, current index]
            return [complements[complement], i]; // Return the pair of indices as an array
        }

        // Store the current element's index as a potential complement for future elements
        complements[arr[i]] = i;
    }

    // If no valid pair is found, return null or an empty array (based on your preference)
    return null;
}

// Example usage:
console.log(pairSum([2,5,9,8,3,1], 3)); // Output will depend on the input array and target sum




