// given the arr nums find the contigous subarr ( containing at least one number) which has its largest sum and retirn its sum 
//ex  nums = [ -2,1,-3,4,-1,2,1,-5,4]

const maxSubsum = (nums) =>{
    // handle empty edge cases 
    if ( nums.length === 0) return 0;
    let currentSum = nums[0];// set it to the first index  assuming the arr has at least one element 
    let maxSum =nums[0];
    for(let i =1; i < nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i]);// this line  decides wether or not to add the current elemnt the exisiting
        //  sub arr sum or  start from  the current element -> resets the  current  sum to the current element if the current sum becomes negative
        maxSum = Math.max(maxSum, currentSum); // updates the max sub arr found so far


    }
    return maxSum ;

}

console.log(maxSubsum([-1,0,20,-14,2,4,5,6,10,-2]));
console.log(maxSubsum([-1,0,3,2,1,-3]));
console.log(maxSubsum([]));

// added challenge return the sub array and the sum of the sub arr
// hint keep track of the indices 

const sumArr = (nums) =>{
    // handle empty edge cases 
    if ( nums.length === 0) return 0;
    let currentSum = 0;
    let maxSum = -Number.MAX_VALUE;// handles arrays with all negative numbers
    let startMax =0, endMax=0, startCurrent=0; // using these to keep track of indices 


    for(let i =0; i < nums.length; i++){
        currentSum += nums[i];
        // update maxSum and indices
        if (currentSum > maxSum){
            maxSum =currentSum;
            startMax = startCurrent;
            endMax =i;
        }
        //  reset if current sum becomes negative 
        if(currentSum < 0){
            currentSum=0;
            startCurrent=i;
        }


    }
    return nums.slice(startMax, endMax +1) ;
    // returns sub arr w max sum  

}
console.log(sumArr([0]));
console.log(sumArr([-1,0,20,-14,2,4,5,6,10,-2]));
