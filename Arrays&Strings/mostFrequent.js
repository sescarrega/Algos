// create a funtion that takes in a string as an argument. return the most frequent character
// of the string. however if there are ties  return the char that appears the earliest.
// e.g. bookeeper -> e (appears 3 times)

// intial thoughts 
// lets create an empty obj so we can append the values and then we can start our loop that will have 2 pointers 
// like in the compress function we will want to check to see if i and j are equal to each other and if they are 
// add a value to the key  contiue doing so until theyre no longer similar  or our string  can no longer be iterated
// how will we use our hash map / obj ?
// secondly we will need to make a counter that will check for the highest value (iterate over the keys)
// finally return result and print

// guided strategy 
// 1. count frequencies - use hsh map or obj to track frequencies 
// 2. identify  most freq char- determine which char has hghest fre but also of which appear first incase of ties 
// 3. return results 

// detailed approach
// 1. intialize hash map - start with an empty obj to count frequencies
// 2. populating hash maps - with a single pointer iterate through the string, 
//    for each char check if its already a key in the obj- (yes ++value ) (no ? add key plus value of 1)
// 3. finding most freq char-- prior to determing this we have to have all counts. iterate thru the hash map to find the 
//    highest value
// 4. handle ties- we need to consider which character appears first 

const mostFrequent = (s) =>{
    // intialize empty hash map 
    let count = {}; 
    // populate hash map + count occurences
    for(let char of s){
        // if the char is not in the obj add it and a value of 1 if it is increment the value
        if(!(char in count)){// this is saying if char is not in count then
            count[char]=1; // add char to count with a value of 1 
        }else{
            count[char] ++ ; // if char is in count add to its value 
        }
    }
    // now we have to find the most requent char ->> think back to maxVal 
    let mostFrequentChar = null;
    let maxFrequent = 0; 
    // iterate through the "count" obj 
    for ( let char in count){
        if( mostFrequentChar=== null || count[char]> maxFrequent){// if mfc is null or if count[char]is greater than maxf
            mostFrequentChar = char; // update MFC
            maxFrequent = count[char];
        }
    }
    console.log(count);
    return mostFrequentChar +" occurs "+ maxFrequent+ " times.";
}
console.log(mostFrequent("trippy"));
console.log(mostFrequent("mindreaderp"));
console.log(mostFrequent("antwreppppp"));
