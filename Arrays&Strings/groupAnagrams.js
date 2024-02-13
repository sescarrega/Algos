// Given an array of strings, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example
// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
// Explanation
// The strings "eat", "tea", and "ate" are all anagrams and thus grouped together.
// Similarly, "tan" and "nat" are anagrams and grouped together.
// "bat" is not an anagram of any other word in the input and thus is the sole member of its group.

// intial approach 

// 1.for each string  generate a key that reps its characters sorted or its character counts, anagrams have identical keys 
//2. use a a hash map where each key is the  sorted reo  of the string and the value is a list of keys that match the key 
//3. itterate through the input array , for each string , and the value is a list  of strings that match the key 
//4. collect all the list from the hash map into an output 

//psuedo code 
// function groupAnagrams(strs):
// Initialize an empty hash map, anagramGroups
// For each string in strs:
//     Generate a key for the string (e.g., sort the characters)
//     If the key is not in anagramGroups:
//         Initialize anagramGroups[key] as a new list
//     Add the string to the list corresponding to its key in anagramGroups
// Return the values of anagramGroups as an array

const groupAnagrams = (strs) => {
    const anagramGroups={}; // here were initalizing  an empty object  for anagram groups
    // iterate over each string in the input array -- each string will be processed  to determine the anagram group
    for(let str of strs){

    }
}




