"use strict"

// Write a function called isNegative that accepts either a number or numeric string
// and return true if the number is negative and false if it is positive or not a number.

function isNegative (num) {
    return Number(num) < 0;
}



console.log(isNegative(42)) //expect false
console.log(isNegative(-38.4)) //expect true
console.log(isNegative("2.22")) // expect false
console.log(isNegative("-53")) // expect true
console.log(isNegative("-.23")) // expect true
console.log(isNegative(null));

// Write a function called portmanteau that accepts an array of strings
// and returns a string that is a combination of all words

function portmanteau (arr) {
    return arr.join("")
    // var portmanteau = ""
    // arr.forEach(word => {
    //     portmanteau += word.trim();
    // });
}



console.log(portmanteau(["Row", "row ", "fight", "the", "power"]))
console.log(portmanteau(["Hello", "world "]))
console.log(portmanteau(["one", "two ", "three", "four"]))


// Write a function called noRoberts that accepts an array of strings and
// returns an array that removes all forms of Robert: Robert, Rob, Bob, Bobby, Bobert, Robby

// function noRoberts (nameArr) {
//     var bucket = [];
//     nameArr.forEach(name => {
//         var lowerName = name.toLowerCase();
//         if (lowerName.includes("rboert")) {
//             nameArr.shift();
//         } else if (!lowerName.includes("rob") && !lowerName.includes("bert")) {
//            bucket.push(name);
//         }
//         // if (lowerName === "robert") {
//         //     alert("Get him");
//         // }
//     });
//     return bucket;
// }

// console.log(noRoberts(["Jim", "Bob", "Martha", "Robert", "Lucille", "bobert"]));
// console.log(noRoberts(["Hank", "bob", "Robby", "Gertrude", "larry"]));
// console.log(noRoberts(["rob", "sally", "Susan", "Roberto", "roger"]));
// console.log(noRoberts(["Joebob", "roBert", "samantha", "Niel", "rboert"]));



// Write a function called rectangleConstructor that accepts 3 parameters and returns a rectangle object
// The parameters will be 2 numbers for the width and height and a string for rectangleColor.
// return object should be:
// {
//     height: 42,
//     width: 42,
//     rectangleColor: "pink"
// }

// var box = document.getElementById("rect");
//
// function makeRectangle(funcObj) {
//     box.style.width = funcObj.width + "em";
//     box.style.height = funcObj.height + "em";
//     box.style.backgroundColor = funcObj.color;
// }
//
// function rectangleConstructor(h, w, c) {
//     if (typeof c === "string") {
//     return {
//         height: parseFloat(h),
//         width: parseFloat(w),
//         color: c
//     }
//
//     } else {
//         return  false;
//     }
// }
//
// // console.log(rectangleConstructor(4, 8, "green"));
// makeRectangle(rectangleConstructor(4, 8, "green"));
// makeRectangle(rectangleConstructor(10, 10, "orange"));
// makeRectangle(rectangleConstructor(20, 5, "pink"));



// Write a function called findLargest that accepts an array of rectangle objects
// and returns the rectangle object that has the largest area

var rectanglesOne = [{height: 3, width: 7, color: "blue"}, {height: 13, width: 4, color: "pink"}, {height: 40, width: 18, color: "purple"}]
var rectanglesTwo = [{height: 10, width: 10, color: "yellow"}, {height: 88, width: 7, color: "red"}, {height: 5, width: 6, color: "green"}]


function findLargest(objArr) {
var area = 0;
    var largest = {
        height: 0,
        width: 0,
        color: "",
    }

    objArr.forEach(rect => {
       var totalArea = rect.height * rect.width;
        if (area < totalArea) {
            area = totalArea;
            largest.height = rect.height;
            largest.width = rect.width;
            largest.color = rect.color;
        }
    })
    return largest;
}

console.log(findLargest(rectanglesOne))
console.log(findLargest(rectanglesTwo))

// Write a function called orderDigits that accepts a number
// and returns a number with the digits ordered from smallest to largest


// console.log(orderDigits(847293))
// console.log(orderDigits(6463))
// console.log(orderDigits(29865))
// console.log(orderDigits(3876042))
// console.log(orderDigits(4367))





// Write a function called findWeapon that accepts a D&D character object and
// returns a string of the name of their weapon

var playerOne = {
    name: "Murder Hobo",
    class: "Barbarian",
    inventory: [
        {
            itemName: "Health Potion",
            itemType: "Potion"
        },
        {
            itemName: "Deck of many things",
            itemType: "Bad idea"
        },
        {
            itemName: "Great Axe",
            itemType: "Weapon"
        }
    ]
}

var playerTwo = {
    name: "Min Max",
    class: "Fighter",
    inventory: [
        {
            itemName: "Long sword",
            itemType: "Weapon"
        },
        {
            itemName: "Ration",
            itemType: "Annoying thing to track"
        },
        {
            itemName: "Elephant",
            itemType: "Mount"
        }
    ]
}

var playerThree = {
    name: "Rules Lawyer",
    class: "Wizard",
    inventory: [
        {
            itemName: "Rat",
            itemType: "Friend"
        },
        {
            itemName: "Peasant rail gun",
            itemType: "Weapon"
        },
        {
            itemName: "Pointy Hat",
            itemType: "Clothing"
        }
    ]
}

//
// function findWeapon(dndChar) {
//     var weapon = 0
//     dndChar.inventory.forEach(invItem => {
//         if (invItem.itemType === "Weapon") {
//             weapon = invItem.itemName;
//         }
//     });
//     return weapon;
// }
//
// console.log(findWeapon(playerOne));
// console.log(findWeapon(playerTwo));
// console.log(findWeapon(playerThree));