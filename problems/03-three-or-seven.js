/*Define a function threeOrSeven that takes in a number parameter and returns
3 if the number is divisible by 3, 7 if the number is divisible by 7, and
21 if the number is divisible by both 3 and 7. Otherwise the function should
return the original number.
*/

// Your code here 

//Define a function threeOrseven that takes in a number parameter.
function threeOrSeven(num) {    //Defined funtion with a number parameter.
    //Create if statement and test whether num is equal to 3 when divided by 3.
    if (num % 3 === 0) {  //Created if statement testing modulo of num by 3 and set remainder equal to 0 because no remainder means it is divisible.
        //Create a return statement that returns 3 if num is divisible by 3.
        return 3;    //Created return statement of 3.
        //Create else if conditional to test if num is divisible by 7.
    } else if (num % 7 === 0) {   //Created an else if to check if the number may be divisible by 7 since it wasn't divisible by 3.
        return 7; //Set a return of 7 if the above condition is true.
        //Create else if statement testing if number is divisible by 3 and 7.
    } else if (num % 3 && 7 === 0)  {   //Created an else if checking to see if num is divisible by 3 and 7.
        //Create a return of 21 if above condition is true.
        return 21;  //Created a return statement of 21.
        //Create an else statement that returns num if all of the conditions above are false.
    } else {    //Created else statement.
        return num;
    }
}

// console.log(threeOrSeven(3));   // => 3
// console.log(threeOrSeven(15));  // => 3
// console.log(threeOrSeven(7));   // => 7
// console.log(threeOrSeven(14));  // => 7
// console.log(threeOrSeven(21));  // => 21
// console.log(threeOrSeven(-42)); // => 21
// console.log(threeOrSeven(100)); // => 100
// console.log(threeOrSeven(0));   // => 0
// console.log(threeOrSeven(-20)); // => -20

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = threeOrSeven;
