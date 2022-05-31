var arr = [ -1, 70, 2, 3,44, 60, 89, -4, -80];
var max = arr[0]; 
for (var i =0; i<arr.length; i++){
    if (arr[i]>= max){
        max = arr[i];
    }
}
console.log(max);

var min = arr[0]
for (var i = 0; i<arr.length; i++){
    if (arr[i] <= min){
        min = arr[i];
    }
}
console.log(min);





