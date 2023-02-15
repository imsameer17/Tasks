// Count frequencies of each entry in an array 
// For example const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry',
//  'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
// It should return an object like this { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
const fruitBasket = ['banana', 'cherry', 'orange', 'apple',
 'cherry','orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
 const add = {};
 for (i = 0; i < fruitBasket.length; i++){
    const fruit = fruitBasket[i];
    if (add[fruit]){
        add[fruit]++;
    } else{
        add[fruit] = 1;
    }

 }
 console.log(add);