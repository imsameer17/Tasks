// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
// Example n= 1, output = 1; For n = 2, 
// the output should be output= 5; 
// For n = 3, the output should be output= 13. 
// For n = 4, the output should be output = 25.
// Area of polygan = (n*n) + ((n - 1) * (n - 1));
function AreaOfPolygan(n){
    if (n <= 0){
        return false;
    } else {
        return (n*n) + ((n - 1) * (n - 1));
    }
}
console.log(AreaOfPolygan(4));

