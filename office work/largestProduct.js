// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
 // 7 and 3 produce the largest product.
 let array = [3,6,-2,-5,7,3]
 let product = [];
 for (i = 0; i < array.length - 1; i++){
    product = Math.max(array[i] * array[i + 1], product);
 }
 console.log(product)