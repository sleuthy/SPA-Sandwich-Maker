"use strict";
console.log("DOMHandler.js works.");

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;
// Variable to hold topping that the user selects
var selectedTopping;

// Bread stuff
var breadChooser = document.getElementById("bread");
breadChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    SandwichMaker.addBread(selectedTopping);
    SandwichMaker.addTopping(finalBreadPrice);
    SandwichMaker.showToppings(BreadChoice);
});

// Meat stuff
var meatChooser = document.getElementById("protein");
meatChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    SandwichMaker.addMeat(selectedTopping);
    SandwichMaker.addTopping(finalMeatPrice);
    SandwichMaker.showToppings(MeatChoice);
});

// Cheese stuff
var cheeseChooser = document.getElementById("cheese");
cheeseChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    SandwichMaker.addCheese(selectedTopping);
    SandwichMaker.addTopping(finalCheesePrice);
    SandwichMaker.showToppings(CheeseChoice);
});

// Veggie stuff
var veggieChooser = document.getElementById("veggies");
veggieChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    SandwichMaker.addVeggie(selectedTopping);
    SandwichMaker.addTopping(finalVeggiePrice);
    SandwichMaker.showToppings(VeggieChoice);
});

// Condiment stuff
var condimentChooser = document.getElementById("condiments");
condimentChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    SandwichMaker.addCondiment(selectedTopping);
    SandwichMaker.addTopping(finalCondimentPrice);
    SandwichMaker.showToppings(CondimentChoice);
});

