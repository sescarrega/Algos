//  given an arr of intergers write a function that returns the sum of the elements in the arr.
// input [1,2,3,4] output 10 
// 1+2+3+4= 10

const sumArr= (arr)=>{
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];

    }
    return sum;
}

console.log(sumArr([1,2,3,4]));
console.log(sumArr([10,2,15,3]));
console.log(sumArr([1,1,1,1]));