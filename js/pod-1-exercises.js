"use strict";

// Source Link: https://java.codeup.com/extra-exercises/javascript/arrays/

// Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
//
// Given:
//
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// function removeAll(array, value){
//     return array.filter(function(element){
//         return element !== value
//     });
// }

// removeAll(bugs, "ant");
// should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]

// console.log(removeAll(bugs, "ant"));

// removeAll(bugs, "mosquito");
// should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]

// console.log(removeAll(bugs, "mosquito"));

// removeAll(bugs, "roach");
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
//
// console.log(testWord("hello"));
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
//
// console.log(numericalString("hello"));
//========================================
//
// function totalValue(x){
//     return x.reduce(function(sum, value) {
//         return sum + value;
//     });
// }
//
// console.log(totalValue(numericalString("hello")));
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

// var groceries = [
// {
//     product: "Milk Carton",
//     quantity: Math.floor(Math.random() * 5) + 1,
//     price: 1.50
// },
// {
//     product: "Cereal Box",
//     quantity: Math.floor(Math.random() * 5) + 1,
//     price: 2.50
// },
// {
//     product: "Egg Carton",
//     quantity: Math.floor(Math.random() * 5) + 1,
//     price: 0.10
// },
// {
//     product: "Bread Loaf",
//     quantity: Math.floor(Math.random() * 5) + 1,
//     price: 1.60
// },
// {
//     product: "Cheese Wheel",
//     quantity: Math.floor(Math.random() * 5) + 1,
//     price: 4.50
// },
// {
//     product: "Chocolate Bar",
//     quantity: Math.floor(Math.random() * 5) + 1,
//     price: 0.10
// },
// {
//     product: "Lollipop Stick",
//     quantity: Math.floor(Math.random() * 5) + 1,
//     price: 0.20
// }
// ];
//
// console.log("Thank you for shopping with us!\n\nYour cart is listed below: " // Logs random cart upon page refresh
//     + "\n" + "\n" + "Product: " + groceries[0].product + "\n" + "Quantity: " + groceries[0].quantity + "\n" + "Price (per unit): $" +  groceries[0].price.toFixed(2)
//     + "\n" + "\n" + "Product: " + groceries[1].product + "\n" + "Quantity: " + groceries[1].quantity + "\n" + "Price (per unit): $" +  groceries[1].price.toFixed(2)
//     + "\n" + "\n" + "Product: " + groceries[2].product + "\n" + "Quantity: " + groceries[2].quantity + "\n" + "Price (per unit): $" +  groceries[2].price.toFixed(2)
//     + "\n" + "\n" + "Product: " + groceries[3].product + "\n" + "Quantity: " + groceries[3].quantity + "\n" + "Price (per unit): $" +  groceries[3].price.toFixed(2)
//     + "\n" + "\n" + "Product: " + groceries[4].product + "\n" + "Quantity: " + groceries[4].quantity + "\n" + "Price (per unit): $" +  groceries[4].price.toFixed(2)
//     + "\n" + "\n" + "Product: " + groceries[5].product + "\n" + "Quantity: " + groceries[5].quantity + "\n" + "Price (per unit): $" +  groceries[5].price.toFixed(2)
//     + "\n" + "\n" + "Product: " + groceries[6].product + "\n" + "Quantity: " + groceries[6].quantity + "\n" + "Price (per unit): $" +  groceries[6].price.toFixed(2)
// );
//
// var total = 0;
// groceries.forEach(function(grocery){
//     total = total + (grocery.quantity * grocery.price);
// });
//
// console.log("Your final bill is: $" + total.toFixed(2));
// ---------------------------------------------------------------------------------------------

// Source Link: https://edabit.com/challenge/fzuGQP9Cmzi3ujj4r

// AlTeRnAtInG cApS

// Create a function that alternates the case of the letters in a string.

// alternatingCaps("Hello") ➞ "HeLlO"

// alternatingCaps("How are you?") ➞ "HoW aRe YoU?"

// alternatingCaps("OMG this website is awesome!") ➞ "OmG tHiS wEbSiTe Is AwEsOmE!"

function alternateCaps(x) {
    var chars = x.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
        chars[i] = chars[i].toUpperCase();
    }
    return chars.join("");
}

console.log(alternateCaps("You don't know how to JS!"));
// ---------------------------------------------------------------------------------------------

// Source Link: https://edabit.com/challenge/ceEEZioNmxuMJFMxi

// Validate Credit Card Number

// Create a function that takes a number as an argument and returns true if the number is a valid credit card number, false otherwise.

// Credit card numbers must be between 14-19 digits in length, and pass the Luhn test, described below:

// 1. Remove the last digit (this is the "check digit").
// 2. Reverse the number.
// 3. Double the value of each digit in odd-numbered positions. If the doubled value has more than 1 digit, add the digits together (e.g. 8 x 2 = 16 ➞ 1 + 6 = 7).
// 4. Add all digits.
// 5. Subtract the last digit of the sum (from step 4) from 10. The result should be equal to the check digit from step 1.

// EXAMPLES:

// validateCard(1234567890123456) ➞ false

// Step 1: check digit = 6, num = 123456789012345
// Step 2: num reversed = 543210987654321
// Step 3: digit array after selective doubling: [1, 4, 6, 2, 2, 0, 9, 8, 5, 6, 1, 4, 6, 2, 2]
// Step 4: sum = 58
// Step 5: 10 - 8 = 2 (not equal to 6) ➞ false

// validateCard(1234567890123452) ➞ true
// Same as above, but check digit checks out.

var testCase = "1234567890123456";

var lastDigit = function removeLastDigit(testCase) { // Will take in a string of numbers and isolate the last digit
    return parseFloat(testCase.slice(testCase.length - 1, testCase.length));
};
console.log(lastDigit(testCase));
// //-----------------------------------------------------------------
var remainderString = function restOfString(x) { // Will take in a string of numbers and return every number but the last digit
    return parseFloat(testCase.slice(0, -1));
};
console.log(remainderString(testCase));
// //-----------------------------------------------------------------
var reversedRemainder = function reverseRemain(remainderString){ // Will reverse the remainder string
    var reversed = "";
    for (var i = remainderString.length - 1; i >= 0; i--){
        reversed = parseFloat((reversed + remainderString[i]));
    }
    return reversed;
};
console.log(reversedRemainder(testCase));
// //-----------------------------------------------------------------
var reversedArray = function stringToArray(reversedRemainder){ // Will convert the reversed remainder string into an array
    return reversedRemainder.split("");
};
console.log(reversedArray(testCase));
// //-----------------------------------------------------------------
function doubleOddPositions(reversedArray) {
    for (var i = 0; i < reversedArray.length; ++i)
        return reversedArray[i] = i % 2 !== 0 ? reversedArray[i] * 2 : reversedArray[i] * 3;
}
console.log(doubleOddPositions(reversedArray));
// ---------------------------------------------------------------------------------------------

// Superhero Database (Bonus Exercise)...see side directory
