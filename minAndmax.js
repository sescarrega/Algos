//  write a function that returns both the min and the max from an array
const minAndMax =(arr)=>{
    let max=-Infinity;// you want it to be dynamic so we have to do the biggeest number and smallest number of all
    let min =Infinity;
    for( let i =0; i<arr.length; i++){
        if (arr[i]> max){
            max= arr[i];
        };
        if(arr[i]<min){
            min= arr[i];
        };
    }
    return  [max, min];
}
console.log(minAndMax([20,3,5,7]));
