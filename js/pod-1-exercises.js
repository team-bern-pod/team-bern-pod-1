"use strict";

// Source Link: https://java.codeup.com/extra-exercises/javascript/arrays/

// Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
//
// Given:
//
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// removeAll(bugs, "ant")
// should return ["mosquito", "scorpion",   "mosquito", "typo", "reference error", "type error"]
//
// removeAll(bugs, "mosquito")
// should return ["ant", "scorpion", "ant",   "ant", "typo", "reference error", "type error"]
//
// removeAll(bugs, "roach")
// should return the original array b/c "roach" has no occurrances.

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

// ---------------------------------------------------------------------------------------------

// Source Link: https://edabit.com/challenge/jRSST87NjECBzbwzL

// Calculate the Total Price of Groceries

// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
//
// {
//     "product": "Milk",
//     "quantity": 1,
//     "price": 1.50
// }

// Examples:
// // 1 bottle of milk:
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
