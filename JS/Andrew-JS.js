//
// console.log(randomIntBetween());
// function twoDice(input) {
//     return (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
// }
//
// // console.log(twoDice());
// function twentySidedDice(input) {
//     return (Math.floor(Math.random() * 20) + 1);
// }
//
// console.log(twentySidedDice());
// function twelveSidedDie(input) {
//     return (Math.floor(Math.random() * 12) + 1);
// }
//
// function rollDie(n) {
//     return (Math.floor(Math.random() * 6) + 1);
// }
//
// console.log(rollDie());
//
// function tetrahedron(input) {
//     return (Math.floor(Math.random() * 4) + 1);
// }
//
// console.log(roller());
// Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction)
//
//
// var numberOfRolls = document.getElementById("numberOfRolls").selectedIndex;
//
// var diceToRoll = document.getElementById("diceToRoll").options;
// alert("Index: " + numberOfRolls[diceToRoll].index + " is " + numberOfRolls[diceToRoll].text);
// function myFunction(x) {
//     var x = document.getElementById("mySelect").selectedIndex = '';
//     var y = document.getElementById("mySelect").options;
//     console.log(y, x);
//     if (x[y] === 0) {
//         var x = function rollDie(n) {
//             return (Math.floor(Math.random() * x) + 1);
//         };
//     } else if (x[y] === 1){
//         var x = function tetrahedron(input) {
//             return (Math.floor(Math.random() * 4) + 1);
//         }
//     }else if (x[y] === 2){
//         var x = function twentySidedDice(input) {
//             return (Math.floor(Math.random() * 20) + 1);
//         }
//     }else if (x[y] === 3){
//         var x = function twoDice(input) {
//             return (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
//         }
//     }
// }
//
// function myFunction2() {
//     var x = document.getElementById("mySelect2").selectedIndex;
//     var y = document.getElementById("mySelect2").options;
//     alert(y[x].text);
// }
//
// function listOfRollsFromDieFunc(numberOfRolls, diceFunction) {
//     var diceArray = [];
//     for (var i = 0; i < numberOfRolls; i++) {
//         diceArray.push(diceFunction());
//     }
//     console.log(diceArray);
//     return diceArray
// }
// console.log(listOfRollsFromDieFunc(x, myFunction2));
//
//
