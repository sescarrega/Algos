//  Write a function, anagrams, that takes in two strings as arguments.
//  The function should return a boolean indicating whether or not the strings
//  are anagrams. Anagrams are strings that contain the same characters, but in 
//  any order.

// ("restful", "fluster") => true, they contain exactly the same characters  and amount of characters
// ("cats", "tocs") => false, the length is the same but the characters are not identical

// =====intial thoughts=====
// there are two strings and we want to iterate through each one with two pointers 
// one pointer will calculate how many of the same characters are present -- that will need to be turned into an int
// the second pointer will then need to be moved up to the first pointer 
// then the int and the character will need to be pushed into an empty ararray
// also a second for loop is required to iterate through the arrays , 
// if the arrays contain the same items  print true

//  key concept hashed map / table 
// a hash map is similar to an array however in a hash map you assign the keys and values

// ==instantiate a hsh map ==
// let m = new Map()
//== adds values==
// m.set(10,"apples")
//      key   value 
// every key will be at zero index [0] 

// ========anagram algo=======
const anagrams =(s1, s2) =>{
    const count ={}; // push the letter key and count value into the obj 

    // iterate thru every character of s1
    for (let char of s1){
    // if there is not a character in s1 dont add to count of char 
        if (!(char in count)){
            count[char] = 0;
        }
    // however if there is a char in s1 then add to count of char
    count[char] += 1;
    }
    console.log("OG count");
    console.log(count);

    // for the next step we cannot use an quality checker because 
    // in java that will only be acessing a reference in memory 
    // not the actual keys or values 

    // now iterate through s2 and reduce from count of char 
    // if the values are at zero true else false

    for (let char of s2){
        // check if char of s2 is in char of s1
        if(char in count){
            count[char] -= 1;
        } else { // if we've entered into this else statment then the strings are not anagrams
            console.log("not an anagram!");
            console.log(count);
            return false;
        }
    }
     // also do not let the count become negative
    for (let char in count){ // notice the in being used here will allow function to iterate thru the keys 
        if (count[char] !== 0){
            console.log("not an anagram!");
            console.log(count);
            return false;
        }
        
    }
    return true;
}; 
anagrams('slurp', 'fluster');
