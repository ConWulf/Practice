"use strict"

var reEnter =document.getElementById("reEnter");
var password =document.getElementById("password");
var button = document.getElementById("enter")
var submit = document.getElementById("submit")
console.log( "reEnter diss " + reEnter.disabled);
console.log("reEnter requ " + reEnter.required);
console.log("password requ " + password.required);

button.addEventListener("click", e=> {
    reEnter.disabled = false;
    console.log(password.value);
})



