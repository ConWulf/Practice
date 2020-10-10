//Write a function that classifies the missing angle as either
// "acute", "right", or "obtuse" based on its degrees.

// function missingAngle(angle1, angle2) {
//     if(180 - (angle1 + angle2) === 90){
//         return "right";
//     } else if(180 - (angle1 + angle2) > 90) {
//         return "obtuse";
//     } else {
//         return "acute";
//     }
// }

// Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.


// function truthy(input) {
//       if (((input == false && typeof input !== "object") || input === null || input === undefined)){
//         return 0;
//     } else if (input == input || typeof input === "object") {
//         return 1;
//     } else {
//         return 0;
//     }
// }
//
// console.log(truthy(NaN));

// Create a function that takes an array of numbers. Return the largest number in the array.

// var num = [4, 5, 1, 3];
//
// function largestNum(arr) {
// return Math.max(...arr);
// }
//
// console.log(largestNum(num));

// Create a function that returns the last value of the last item in an array or string.

// var str = "last index";
//
// function lastItem(input) {
// return input[input.length - 1]
// }
//
// console.log(lastItem(str));

// Create a function that takes two integers and checks if they are equal.

// function isEqual(num1, num2) {
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         return num1 === num2;
//     } else {
//         return false;
//     }
// }

// Given an array of integers, return the difference between the largest and smallest integers in the array.

// function difference(nums) {
//     return Math.max(...nums) - Math.min(...nums);
// }


// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// function numberSplit(n) {
//     var splitNum = [];
//     splitNum.push(Math.floor(n/2));
//     splitNum.push(Math.ceil(n/2));
//     return splitNum;
// }