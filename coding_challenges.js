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

// function english(str) {
//     var check = str.toLowerCase()
//     return check.includes("english");
// }

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

//function
//takes in string of letters
//count each letter
//output the number of times each letter appears
//space each num w/ a character

var hello = "hello world";
var c =  "challenge";

function stringToNum (str) {

}




// sum of multiples
// var count = 0;
//
// for(var i = 0; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         console.log(count += i);
//     }
// }

//even fibonacci

// function fibonacci(number) {
//     for(var i = 1; i < number; i++){
//     }
// }
//
// fibonacci(100);

// write a function that returns a boolean if the given string contains a valid number of braces
// let brace1 = "(afaf{ghjgfhgf}asda)" //true
// let brace2 = "erwb [ghjgfhgf] sdgs" //true
// let brace3 = "{asdf (ghjgfhgf] asdfda}" //false
// let brace4 = "(wfweqf [ghjgfhgf] fgassa)" //true
// let brace5 = "(ghjgfhgf)" //true
//
// function isValidNesting(str) {
//     let countBraces = 0
//     for (let i = 0; i < str.length  ; i++) {
//         if (str.charAt(i) === "[" || str.charAt(i) === "{" || str.charAt(i) === "(" ) {
//             countBraces += 1;
//             console.log(" left " + countBraces);
//         } else if (str.charAt(i) === "]" || str.charAt(i) === "}" || str.charAt(i) === ")" ) {
//             countBraces -= 1
//             console.log("right " + countBraces);
//         }
//     }
//     return countBraces === 0;
// }
//
// // console.log(isValidNesting(brace1));
// // console.log(isValidNesting(brace2));
// console.log(isValidNesting(brace3));
// // console.log(isValidNesting(brace4));
// // console.log(isValidNesting(brace5));



//take in two arrays, return array with elements that are in the first but not the second






// function nameShuffle(str) {
//     return str.split(" ").reverse().join(" ");
// }

//find a palindromic number by multiplying two numbers



function countLetters(str) {
    //count each letter in the order that it appears


}



const today = new Date("October 31, 2020");
console.log(today);
console.log(today.getFullYear());

let birthday = "11/04/1982";
let age = 34;

function calcAge(date) {
 let dateArr =  date.split("/");

}




