"use strict";

var finalCheesePrice = 0
var CheeseChoice = "";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(sandwich) {
        var cheesePrices = {"cheddar": 2.00, "provolone": 2.25, "pepperjack": 1.50, "no-cheese": 0}
        sandwich.addCheese = function(value) {
          var userCheeseInput = value;
          console.log("userCheeseinput", userCheeseInput);
          var prop;
            for (prop in cheesePrices) {
                if(userCheeseInput.toLowerCase() === prop.toLowerCase()) {
                  finalCheesePrice += cheesePrices[prop]
                  CheeseChoice = prop;
              }
           }
        }
  return SandwichMaker;
})(SandwichMaker || {});


