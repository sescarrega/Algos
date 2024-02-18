// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// function solution(inputArray) {
   let maxProd= inputArray[0] * inputArray[1];
    for ( i = 0; i < inputArray.length-1; i++){
        let currentprod = inputArray[i]* inputArray[i + 1];
        if ( currentprod > maxProd){
            maxProd =currentprod
        }
        
    }
    
    return maxProd;

