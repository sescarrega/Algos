// uncompress is a function that will take a string where the "char" is repeated a corresponding amount of times
//  for example 2a = aa - r4 rrrrr
// 1c2o1k1i1e  = cookie
// 1f1l1u2t1e1r = flutter

// Psuedo code 
// we want a for loop to iterate through the elements not the indices so then we need to then have a way to look at the number 
// say 2  and if the next thing in the element is not an other number we have to multiple the char by the letter 
//  so perhaps we have to ad char by num so num has to be dynamic

// walk trhough
// we'll nedd 2 pointers i & j both at i[0] j[0] 
// we want j to move until the end of a number sequence and secondly we need i to move along with j till it reaches the next sumber in the string

// what happens if you have a large number like 127b will your algo read it as 1 2  7 giving you only 10 b's rather 127? 

//  this solution is using built in functions how would solve without them? 
const uncompress = (s) =>{
    let result = '';// we need a empty string so we can return the result into that 
    const numbers = '0123456789'; // we need to use this to tell our pointer j what to look for 
    let i  = 0;
    let j =0; 
    // both number should be at 0 so that they can move along with eachother one will determine which is a num or a char
    while (j < s.length){ // we have our loop here for j to iterate through as long as it is in a valid index
        if(numbers.includes(s[j])){ // here we check if in the "s" variable we find the any of the values in numbers  bu using our j pointer 
            j++; // if it is a number we move the j pointer along however, if that is not the case move the i pointer along 
        } else {//  what now? if the i moves its becuase its a char  or letter,
            const num = Number(s.slice(i, j)); // slice the string all the way up to BUT not including j * Number here will conver the string into its number type*
            for (let count = 0; count < num; count += 1){ // here we are establishing a new variable 
                result+= (s[j]);// ok so what we have to rember is @ i we slice off the number prior to the char  meaning while j is looking for numbers its also looking 4 letters
            }
            j+= 1;
            i=j;
        }
    }
    return result;
};
console.log(uncompress("2b"));
console.log(uncompress("1c2o1k1i1e "));

//  from dr.T gpt

const unCompress = (s) => {
    let result = ''; // Correct: use a string for the result
    let i = 0;
    let j = 0;
    // here we still use 2 pointers 
    
    while (j < s.length) {
        if ('0123456789'.includes(s[j])) {// this is using built-ins 
            // Correctly increment j when a digit is found
            j += 1;
        } else {
            // When a non-digit is found, parse the number and append character
            const num = parseInt(s.slice(i, j), 10); // Convert the sliced string to a number
            for (let count = 0; count < num; count += 1) {
                result += s[j]; // Use += to append character to string
            }
            j += 1;
            i = j; // Move i to j's new position
        }
    }
    return result;
};

console.log(unCompress("1c2o1k1i1e")); // Should output "cookie"

//  dr.T w/o built ins 
//  algo steps
// 1. iterate through each character of the input string one by one 
// 2. build manually by considering the digits place value e.g. '1' and '2'  should be interpreted as 12 
// 3. once a non digit is encountered repeat the char on the previously constructed number 
// 4. reset

function uncompress3(s) {
    let result = ''; // 1. Initialize an empty string to hold the final uncompressed result.
    let currentNum = 0; // 2. Initialize a variable to build numbers from digit characters in the string.

    for (let i = 0; i < s.length; i++) { // 3. Start a loop to iterate through each character in the input string.
        if (s[i] >= '0' && s[i] <= '9') { // 4. Check if the current character is a digit. *&& operator*
            // 5. If it's a digit, update currentNum by shifting its current value left by one decimal place and adding the new digit.
            currentNum = currentNum * 10 + (s[i] - '0');
        } else { // 6. If the current character is not a digit (i.e., it's a letter).
            // 7. Use a while loop to append the current character to the result string currentNum times.
            // doing so will drop it from the string also chaning the indices 
            while (currentNum > 0) { // while currentNum is greater than 0 it will continue to iterate 
                result += s[i];
                currentNum--;
            }
        }
    }

    return result; // 8. Return the uncompressed string after the loop has processed all characters.
}

// Example usage:
console.log("test 3")
console.log(uncompress3("1b2o1k")); // Intended output: "book"
console.log(uncompress3("4s3b"));
console.log(uncompress3("2p1o5p"));





