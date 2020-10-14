"use strict"

//Write a function that returns the SUM of a sequence of numbers. This sequence is determined by three variables: start, finish, and step. The sequence begins at start, ends at finish, and goes up by step until it reaches finish or a number that when increased by step would go past finish.

// function stepSum() {
//     var output = 0;
//     for(var i = 1; i <= 4; i++) {
//         output+=i;
//     }
//     return output;
// }

// function stepSum(start, finnish, step) {
//     var output = 0
//     for(var i = start; i <= finnish; i++) {
//         start += start+step;
//         output += start;
//         if (output > finnish) {
//             break;
//         }
//     }
//     return output
// }

// function stepSum(start, finnish, step) {
//     var output = 0
//     for(var i = start; i <= finnish; i+= step) {
//         output += i;
//     }
//     return output
// }
//
// console.log(stepSum(1, 4, 1));
// console.log(stepSum(4,10,5));


// Given a string of any length with any characters in it, write a function to determine whether or not the string contains the whole word "english". The order of characters/spelling is important, a string "agkjnenglishsad" would return true while "asdneglihsth" would return false. Upper and lower case does not matter. Return values should be booleans (true/false).

// var no = "FaagdnglishAGG";
// var yes = "SMFENgliSHasnD";
// var x = "GbhdfJeNglishHHf";
//
// function english(str) {
//     var check = str.toLowerCase()
//     return check.includes("english");
// }
//
// console.log(english(no));
// console.log(english(yes));
// console.log(english(x));




// var numArr = [1, -6, 5, 4, 3, -7, -10, 201, -3];


// function addInt(arr) {
//     var negative = 0;
//     var sum = [];
//     var positive = [];
//     arr.forEach(number => {
//         if(number < 0){
//             negative += number;
//         } else if(number > 0) {
//             positive.push(number)
//         }
//     });
//     sum.push(negative);
//     sum.unshift(positive.length);
//     return sum;
// }
//
// console.log(addInt(numArr));