// // find the max value 
// const maxVal = (nums) =>{
//     let maximum = -Infinity;
    
//     for(let num of nums){
//         if (num > maximum) maximum = num;
//     }
// }

// return maximun; /// not working because this is out of the scope of the function
// console.log( maximum);
// maxVal([4,7,2,8]);

const maxVal = (nums)=>{
    let maximum = -Infinity;
    for( let num of nums){
        if (num > maximum) maximum = num;
    }
    // return within the function 
    return maximum; 
}// end of socpe 
// now call the function to see the results using log, we also so this so we can reuse maxval 

console.log(maxVal([4,1,22,8,35]));
console.log(maxVal([4,1,-22,800,35000]));
console.log(maxVal([4,-1,-22,-800,-35000]));
console.log(maxVal([-4,-1,-22,-800,-35000]));

