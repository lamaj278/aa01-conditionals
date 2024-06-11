/*
Define a function `isFive` that takes in a number parameter. It should return
a string of 'is five' if the number is equal to 5 and `null` if it is not.
*/

// Your code here 

//Define a function named isFive that takes in a number parameter.
function isFive(num) {  //Defined function with one number parameter.
    //Create an if statement where num is strictly equal to 5.
    if (num === 5) {    //Defined if statement and num is now being tested to see if its equal to five.
        //Return is five if number argument is equal to five.
        return `is five`    //Returning number is five if condition is true.
        //Create an else statement that evaluates to null.
    } else (num = null) //Created an else statement that evaluates to null.
    //create a return statement that is null and relation to the else statement.
        return null //Created a return statement that returns null.
}
// console.log(isFive(5));      // => 'is five'
// console.log(isFive(13));     // => null
// console.log(isFive("apple")) // => null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isFive;
