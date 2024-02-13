// Write a function, anagrams, that takes in two strings as arguments. The function should return
//  a boolean indicating whether or not the strings are anagrams. Anagrams are strings that 
//contain the same characters, but in any order.

// hash map, using an object 

// const anagrams = (s1, s2) => {
//     const count = {};
//     for (let char of s1) {
//       if (!(char in count)) {
//         count[char] = 0;
//       }
//       count[char] += 1;
//     }
    
//     for (let char of s2) {
//       if (count[char] === undefined) {
//         return false;
//       } else {
//         count[char] -= 1;
//       }
//     }
    
//     for (let char in count) {
//       if (count[char] !== 0) {
//         return false;
//       }
//     }
const anagrams = (s1, s2) => {
    const count = {}; // 1. Initialize an empty object to keep track of character counts.
  
    // 2. First Loop: Count the occurrences of each character in the first string (s1).
    for (let char of s1) {
      if (!(char in count)) { // 2a. If the character is not already in the count object, add it with a count of 0.
        count[char] = 0;
      }
      count[char] += 1; // 2b. Increment the count for this character.
    }
    
    // 3. Second Loop: Process the second string (s2) to decrement the count for each character.
    for (let char of s2) {
      if (count[char] === undefined) { // 3a. If a character in s2 doesn't exist in count, they're not anagrams.
        return false;
      } else {
        count[char] -= 1; // 3b. Otherwise, decrement the count for this character.
      }
    }
    
    // 4. Final Check: Ensure all counts are back to 0, indicating an exact match.
    for (let char in count) {
      if (count[char] !== 0) { // 4a. If any count isn't 0, s1 has characters not perfectly matched by s2.
        return false;
      }
    }
    
    return true; // 5. If all checks pass, the strings are anagrams.
  };
  