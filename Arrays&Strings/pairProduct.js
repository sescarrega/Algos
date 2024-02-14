//  write a funtion that takes in an array and a target prduct the output should return a
//  pair of indices whose value is equal to target pair  within an array. 

const pairProduct=(arr, targetProduct) =>{
    // use a hash map, intialize an empty obj 
    let complements ={};
    // intialize loop for array
    for( let i = 0; i < arr.length; i++){
    // set complement by divding targetProduct by arr[i]
        let complement = targetProduct/ arr[i];
        // check if complement exists in complements and return result
        if( complement in complements){
            return [complements[complement],i]; 
        }
        //  however if there is no record of that complement add it to the obj complements 
        complements[arr[i]]= i; // complements i is equal to arr[i]'s value however in complements we'll be saving that as a key, so that means that we're storing i as a value 
    }
    // if there is no such complement  available then we have to return null
    return null;
}

console.log(pairProduct([3,2,5,4,1], 8)); // expected out come [1,3]
console.log(pairProduct([4,6,8,2], 16));// [2,3]
console.log(pairProduct([3,2,5,4,1], 10));// [1,2]


