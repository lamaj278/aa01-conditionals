/*
Define a function named bothStringsIncluded that accepts a sentence string,
and two strings as parameters (for a total of 3 parameters). The function
should return true if both strings are found in the sentence, otherwise
it should return false.
*/

// Your code here 
//Define a function named both strings with 3 parameters: "Sentence", "str1", and "str2".
function bothStringsIncluded(sentence, str1, str2) {    //Defined function with 3 parameters as stated in pseudocode.
    //Create an if statement that searches for the strings in the sentence.
    if (str1.search(sentence) + str2.search(sentence) === true) {   //Created if statement that searched for the strings in the sentence.
        //Create a return statement that states true if the above condition is true.
        return true; //Created return statement that returns true if conditions are met in above line of code.
        //Create else statement that returns false if the above conditions are not met.
    } else {
        return false
    }
}

// console.log(bothStringsIncluded("how now brown cow?", "panther", "cow"));  //=> false
// console.log(bothStringsIncluded("Dance party!", "Dance", "party"));        //=> true
// console.log(bothStringsIncluded("Question?", "tion", "?"));                //=> true
// console.log(bothStringsIncluded("I love programming", "apple", "potato")); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = bothStringsIncluded;
