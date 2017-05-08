console.log("DOMHandler.js works.");

var breadChoice = document.getElementById("bread");
var proteinChoice = document.getElementById("protein");
var cheeseChoice = document.getElementById("cheese");
var condimentChoice = document.getElementById("condiments");
var veggieChoice = document.getElementById("veggies");


// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
proteinChoice.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
});