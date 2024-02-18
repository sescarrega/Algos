// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
// function solution(year) {
   // finding the base value and giving the actual century
    let century= Math.floor(year / 100);
    // we already have the century but if we divide and have a remainder here then it  means that we need to add to the century
    if (year % 100 > 0){
        century += 1; 
    }
    return century;

    
