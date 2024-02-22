
// ex. [1,2,3,4,5] [5,4,3,2,1]

// approach
// set up two pointers in at the end and at the begining 
// loop until pointers meet in the middle 
// create a temp variable to facilitate swaping elements
// move pointers along 
const reverseArr =(arr) =>{
    let start = 0 ;
    let end = arr.length -1;

    while( start < end){
        // swap the elements
        let temp= arr[start];
        arr[start]= arr[end];
        arr[end]=temp;

        // move the pointers
        start++;
        end --;
    }
    return arr;

}

console.log(reverseArr([1,2,3,4,5,6,7]));
console.log(reverseArr([11,2,683,994,50976,6234567,7]));
