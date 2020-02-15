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


function twoDice(input) {
    return (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
}

// console.log(twoDice());


function twentySidedDice(input) {
    return (Math.floor(Math.random() * 20) + 1);
}

// console.log(twentySidedDice());


function twelveSidedDie(input) {
    return (Math.floor(Math.random() * 12) + 1);
}



function tetrahedron(input){
    return (Math.floor(Math.random() * 4) + 1);
}

// console.log(tetrahedron());


function rollDie(n) {
    return (Math.floor(Math.random() * 6) + 1);
}
// console.log(rollDie());
// Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction)

function listOfRollsFromDieFunc(numberOfRolls, input) {
        var diceArray = [];
        for (var i = 0; i < numberOfRolls; i++) {
                diceArray.push(input);
                console.log(diceArray[i]);
        }
        return diceArray
}
console.log(listOfRollsFromDieFunc(5, twelveSidedDie()));






// kamea.colors.forEach(function (color) {
//     console.log("Your Dice roll is" +   )
// });

// This function should take in two arguments:


//     The first argument is the number of rolls you want to make.
//     The second argument is a function that contains the function definition for the type of die you want to roll.


//     For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then the function will return an array containing one value that is the result of calling the tetrahedron function.







//1. Make a function called listOfRolls(num)
//2. that takes in a number containing how many 6-sided dice rolls you want to make.
//3. The listOfRolls function should return an array of that length, where each element of the array is the result of the rollDie function.
