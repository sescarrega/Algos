// given an array move all the zeroes to the back of the array 
// focus on inplace array modification 
// ex [2,0,0,0,0,1,3] -> [2,1,3,0,0,0,0]

// aproach 
// move forward all non-zero numbers 

const moveZeroes =(arr) =>{
    // set two pointers 
    // i  --> scan thru arr  looking for non zero elements (read)
    let j=0;// -->  track where non zero elements should be placed (write)
    // iterate thru the whole loop with i 
    for(let i=0; i< arr.length; i++){
        if (arr[i] !== 0){ // if element is a non zero
            arr[j]=arr[i]; // set i to j this helps facilitate bringing forward non zero numbers
        }
        // handle the zeroes  from j's current position -> fill the array with zeros
        for(; j<arr.length; j++){
            arr[j]=0;
        }
        j++; // increment j only if  it is different fom i
    }
    return arr;
}

console.log(moveZeroes([1,0,0,0,0,2,3,4]));
