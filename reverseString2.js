// reverse string 

const revString = (s)=> {
    let sArr = s.split("");
    let res="";
    for (let i = sArr.length -1; i>= 0; i-- ){
        res += sArr[i];
    }
    return  res;
}
console.log(revString("hello"));