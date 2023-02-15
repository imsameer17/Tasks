// Given the string, check if it is a palindrome.
// Example
// For inputString = "aabaa", the output should be = true; 
// For inputString = "abac", the output should be = false;
// For inputString = "a", the output should be = true
function palindrome(str){
    let split = str.split("");
    let reverse = split.reverse();
    let join = reverse.join("");
    if (join === str){
        return true;
    } else {
        return false;}
}
console.log(palindrome("aabaa"))