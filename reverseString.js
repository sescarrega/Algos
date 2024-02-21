//  given a string write a function that returns the string in reverse order
//  ex input "hello" -> output "olleh"

const reverseString =(s)=>{
    // turn string into an array
    let arr = s.split("")
    let res=[]
    // iterate backwards// stop at index o // decrement i --
    for(let i =arr.length-1; i>=0; i--){
        //push arr[i] into result
        res.push(arr[i]);
    }
    // the result should be a string
    return res.join('');
}
console.log(reverseString("wassssuppp!"));
console.log(reverseString("ZIGGY"));
console.log(reverseString("flowerbeds"));
console.log(reverseString("racecar"));
