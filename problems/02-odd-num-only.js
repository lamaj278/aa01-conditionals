/*
Define a function oddNumOnly that takes in a number parameter and returns the
number if it is odd and returns null otherwise.
*/

// Your code here 

/*
Define the function named oddNumOnly that takes in a number parameter.
*/
function oddNumOnly(num) {  //Created a function that takes in a number parameter.
    //Create a conditional that tests if the parameter (num) is odd or even.
    if (num % 2 !== 0) {  //Created an if statement using modulo to test if number is not equal to 2.
        //return num if it is odd.
        return num  //created return statement for num if it is odd.
        //Create an else if statement that evaluates to null if number is even.
    } else { //created else if statement that tests if the remainder of the number is equal to 2.
    //Create a return statement to return null for the above condition if the remainder is equal to 2.
        return null //Created a return statement named null.
    }
}


// console.log(oddNumOnly(2));   // => null
// console.log(oddNumOnly(5));   // => 5
// console.log(oddNumOnly(-17)); // => -17
// console.log(oddNumOnly(0));   // => null
// console.log(oddNumOnly(3))    // => 3

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = oddNumOnly;
