// Palindrome
function solution(inputString) {
   //initializing a loop where i moves forward and j moves backwards
    for( i = 0; i< inputString.length/2; i++){ // we're dividing the length because we only need i to meet j half way
        j= inputString.length -1 -i;
        // if i and j are not equal to each other then its not a palindrome
        if ( inputString[i] !== inputString[j]){
            return false;
        }
    } 
    return true;
}