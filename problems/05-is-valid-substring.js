/*
Define a function isValidSubStr that takes in two string parameters. The
function should return a string of "VALID" if the second string is part of the
first string regardless of the casing of the characters. Otherwise it should
return "INVALID".
*/

// Your code here 

//Define a function named isValidSubStr that takes in two string parameters.
function isValidSubStr(str1, str2) {    //Created a function that takes in two parameters.
    //Create an if statement that tests if str2 is part of str1.
    if (str2.search(str1)) {    //Created if statement and used the search method.
        //Return VALID if the above condition is true.
        return "VALID"  //Created return statement with valid as a string.
        //Create an else statement that returns INVALID if above condition is not met.
    } else {    //Created else statement for above condition.
        return "INVALID"  //Created return statement for above condition to return INVALID.
    }
}

// console.log(isValidSubStr("JOY", "joy"));                     // => 'VALID'
// console.log(isValidSubStr("The cat jumped!", "he cat jump")); // => 'VALID'
// console.log(isValidSubStr("Time to program", "time"));        // => 'VALID'
// console.log(isValidSubStr("happy", "happiness"));             // => 'INVALID'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isValidSubStr;
