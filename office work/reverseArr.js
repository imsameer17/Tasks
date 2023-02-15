// Write a program to reverse an array or string using loop
// input: [ 1, 2, 3 ]
// output: [ 3, 2, 1 ]
var arr = [1,2,3];
var test = [];
for (i = arr.length - 1; i >= 0; i--){
    test.push(arr[i]);
}
console.log(test);