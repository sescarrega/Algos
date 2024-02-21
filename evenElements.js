//  given an arr write a function that returns true if all elements are even, otherwise false

const evenElemnts = (arr)=>{
    // initialize loop 
    for(let i=0; i<arr.length; i++){
        let element = arr[i];
        if (element % 2 !==0 ){
            return false;
        }
    }
    return true; 
}
console.log(evenElemnts([2,4,6,11,12]));
console.log(evenElemnts([12,240,67,11,12]));
console.log(evenElemnts([12,240,68,10,12]));
console.log(evenElemnts([2,2,68,10,12]));