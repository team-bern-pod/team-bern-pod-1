// Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.
//     Make a function called coinFlip() that returns either 0 or 1, randomly
// Make a function called twoDice() that returns the sum of rolling two six sided dice.
//     Make a function called twentySidedDie() that returns a random integer between 1 and 20.
// Make a function called twelveSidedDie() that returns a random integer between 1 and 12.
// Make a function called tetrahedron() that returns a random integer between 1 and 4.
// Make a function called rollDie() that returns an integer between 1 and 6.
function randomIntBetween(input) {
    return Math.floor(Math.random() * 2);
}

// console.log(randomIntBetween());
// function twoDice(input) {
//     return (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
// }

// // console.log(twoDice());
// function twentySidedDice(input) {
//     return (Math.floor(Math.random() * 20) + 1);
// }

// console.log(twentySidedDice());
// function twelveSidedDie(input) {
//     return (Math.floor(Math.random() * 12) + 1);
// }

// function rollDie(n) {
//     return (Math.floor(Math.random() * 6) + 1);
// }

// console.log(rollDie());

// function tetrahedron(input) {
//     return (Math.floor(Math.random() * 4) + 1);
// }

// console.log(roller());
// Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction)


// var numberOfRolls = document.getElementById("numberOfRolls").selectedIndex;

// var diceToRoll = document.getElementById("diceToRoll").options;
// alert("Index: " + numberOfRolls[diceToRoll].index + " is " + numberOfRolls[diceToRoll].text);
function myFunction() {
    var x = document.getElementById("mySelect").selectedIndex = '';
    var y = document.getElementById("mySelect").options;
    console.log(y, x);
    if (x[y] === 0) {
        var x = function rollDie(n) {
            return (Math.floor(Math.random() * 6) + 1);
        };
    } else if (x[y] === 1){
        var x = function tetrahedron(input) {
            return (Math.floor(Math.random() * 4) + 1);
        }
    }else if (x[y] === 2){
        var x = function twentySidedDice(input) {
            return (Math.floor(Math.random() * 20) + 1);
        }
    }else if (x[y] === 3){
        var x = function twoDice(input) {
            return (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
        }
    }
}

function myFunction2() {
    var x = document.getElementById("mySelect2").selectedIndex;
    var y = document.getElementById("mySelect2").options;
    alert(y[x].text);
}

function listOfRollsFromDieFunc(numberOfRolls, diceFunction) {
    var diceArray = [];
    for (var i = 0; i < numberOfRolls; i++) {
        diceArray.push(diceFunction());
    }
    console.log(diceArray);
    return diceArray
}
console.log(listOfRollsFromDieFunc(x, myFunction2));


// This function should take in two arguments:


//     The first argument is the number of rolls you want to make.
//     The second argument is a function that contains the function definition for the type of die you want to roll.


//     For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then the function will return an array containing one value that is the result of calling the tetrahedron function.


//1. Make a function called listOfRolls(num)
//2. that takes in a number containing how many 6-sided dice rolls you want to make.
//3. The listOfRolls function should return an array of that length, where each element of the array is the result of the rollDie function.
