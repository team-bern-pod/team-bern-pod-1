"use strict";

// Source Link: https://java.codeup.com/extra-exercises/javascript/arrays/

// Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
//
// Given:
//
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// function removeAll(array, value){
//     return array.filter(function(el){
//         return el !== value
//     });
// }

// removeAll(bugs, "ant")
// should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]

// console.log(removeAll(bugs, "ant"));

// removeAll(bugs, "mosquito")
// should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]

// console.log(removeAll(bugs, "mosquito"));

// removeAll(bugs, "roach")
// should return the original array b/c "roach" has no occurrences.

// console.log(removeAll(bugs, "roach"));

// ---------------------------------------------------------------------------------------------

// Source link: https://edabit.com/challenge/TEvX5dzA4RS7ZLtxe

// One Button Messaging Device
//
// Imagine a messaging device with only one button. For the letter A, you press the button one time, for E, you press it five times, for G, it's pressed seven times, etc, etc.
//
// Write a function that takes a string (the message) and returns the total number of times the button is pressed.
//
// Examples:
// howManyTimes("abde") ➞ 12
// howManyTimes("azy") ➞ 52
// howManyTimes("qudusayo") ➞ 123
// Notes: Ignore spaces.

// var testWord = function splitToArray(x){ // Will take a string and split into individual characters
//     return Array.from(x);
// };

// console.log(testWord("anthony"));
//========================================

// var numericalString = function letterValue(testWord){ // Will convert individual characters to a numerical value
//
//     var alphaReference = {
//         a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7,
//         h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16,
//         q: 17, r: 18, s: 19, t: 20, u: 21, v: 22,
//         w: 23, x: 24, y: 25, z: 26
//     };
//
//     if(testWord.length === 1)
//         return alphaReference[testWord] || ' ';
//     else{
//         return testWord.split('').map(letterValue);
//     }
// };

// console.log(numericalString("anthony"));
//========================================

// function totalValue(x){
//     return x.reduce(function(sum, value) {
//         return sum + value;
//     });
// }
//
// console.log(totalValue(numericalString("anthony")));
// ---------------------------------------------------------------------------------------------

// Source Link: https://edabit.com/challenge/jRSST87NjECBzbwzL

// Calculate the Total Price of Groceries

// Create a function that takes an array of objects (groceries) which calculates the total price and returns it
// as a number. A grocery object has a product, a quantity and a price, for example:

// {
//     "product": "Milk",
//     "quantity": 1,
//     "price": 1.50
// }
//
// Examples:
// 1 bottle of milk:
//      getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5
//
// // 1 bottle of milk & 1 box of cereals:
//      getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4
//
// // 3 bottles of milk:
//      getTotalPrice([
//     { product: "Milk", quantity: 3, price: 1.50 }
// ]) ➞ 4.5
//
// // Several groceries:
//      getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Eggs", quantity: 12, price: 0.10 },
//     { product: "Bread", quantity: 2, price: 1.60 },
//     { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4
//
// // Some cheap candy:
//      getTotalPrice([
//     { product: "Chocolate", quantity: 1, price: 0.10 },
//     { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) ➞ 0.3

// Notes: There might be a floating point precision problem in here...

var groceries = [
{
    product: "Milk Carton",
    quantity: Math.floor(Math.random() * 5) + 1,
    price: 1.50
},
{
    product: "Cereal Box",
    quantity: Math.floor(Math.random() * 5) + 1,
    price: 2.50
},
{
    product: "Egg Carton",
    quantity: Math.floor(Math.random() * 5) + 1,
    price: 0.10
},
{
    product: "Bread Loaf",
    quantity: Math.floor(Math.random() * 5) + 1,
    price: 1.60
},
{
    product: "Cheese Wheel",
    quantity: Math.floor(Math.random() * 5) + 1,
    price: 4.50
},
{
    product: "Chocolate Bar",
    quantity: Math.floor(Math.random() * 5) + 1,
    price: 0.10
},
{
    product: "Lollipop Stick",
    quantity: Math.floor(Math.random() * 5) + 1,
    price: 0.20
}
];

console.log("Thank you for shopping with us!\n\nYour cart is listed below: "
    + "\n" + "\n" + "Product: " + groceries[0].product + "\n" + "Quantity: " + groceries[0].quantity + "\n" + "Price (per unit): $" +  groceries[0].price.toFixed(2)
    + "\n" + "\n" + "Product: " + groceries[1].product + "\n" + "Quantity: " + groceries[1].quantity + "\n" + "Price (per unit): $" +  groceries[1].price.toFixed(2)
    + "\n" + "\n" + "Product: " + groceries[2].product + "\n" + "Quantity: " + groceries[2].quantity + "\n" + "Price (per unit): $" +  groceries[2].price.toFixed(2)
    + "\n" + "\n" + "Product: " + groceries[3].product + "\n" + "Quantity: " + groceries[3].quantity + "\n" + "Price (per unit): $" +  groceries[3].price.toFixed(2)
    + "\n" + "\n" + "Product: " + groceries[4].product + "\n" + "Quantity: " + groceries[4].quantity + "\n" + "Price (per unit): $" +  groceries[4].price.toFixed(2)
    + "\n" + "\n" + "Product: " + groceries[5].product + "\n" + "Quantity: " + groceries[5].quantity + "\n" + "Price (per unit): $" +  groceries[5].price.toFixed(2)
    + "\n" + "\n" + "Product: " + groceries[6].product + "\n" + "Quantity: " + groceries[6].quantity + "\n" + "Price (per unit): $" +  groceries[6].price.toFixed(2)
);

console.log("Your final bill is: $ "
    + ((groceries[0].quantity * groceries[0].price)
    + (groceries[1].quantity * groceries[1].price)
    + (groceries[2].quantity * groceries[2].price)
    + (groceries[3].quantity * groceries[3].price)
    + (groceries[4].quantity * groceries[4].price)
    + (groceries[5].quantity * groceries[5].price)
    + (groceries[6].quantity * groceries[6].price)).toFixed(2)
);
