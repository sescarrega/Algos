// ====Prompt=====
    // Write a function, mostFrequentChar, that takes in a string as an argument. 
    // The function should return the most frequent character of the string. 
    // If there are ties, return the character that appears earlier in the string.

    // You can assume that the input string is non-empty.

// ===INITIAL THOUGHTS===
// iterate through a string and create an object of key value pairs
// after the key value pairs have been created use a for loop to compare the key value pairs.
// maybe it needs two pointers to compare the key value pairs 

//walk- through 

const mostFrequentChar =(s1) =>{
    // intialize a count object -- like in the anagram algo
    const count ={};

    // now iterate through every character in the string and make it into an obj
    for (let char of s1){
        // now we want to intialiaize the key value pairs if it is Not already an key value pair 
        if (!(char in count)){
            count[char] = 0 ;
        }
        // but if the character is already an obj then +1 to the count of char
        count[char] += 1;
    }
    console.log(count);

    // now create the logic to find which char is the most frequent 
    // iterate thru obj 
    // work in the max value logic 
    let hi = null ;
        // at this time hi must be null and not at zero
    for( let char of s1){
        // if (count[char]> count[hi])
        // as it is now line 36 will not work because hi  is null and this will return undefined 
        // so we have to set hi as something  to be compared to
        if (hi == null || count[char]> count[hi])
        // line 39 will alow you to replace null for a val
        hi = char;
        console.log(hi);
        // this is incorrect and has not returned in cosole the way id like. 
    }


};
mostFrequentChar("stopp");