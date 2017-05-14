"use strict";

var finalCondimentPrice = 0
var CondimentChoice = "";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(sandwich) {
var condimentPrices = {"spicymustard": .50, "honeymustard": .50, "mayo": .50, "no-condiment": 0};
        sandwich.addCondiment = function(value) {
          var userCondimentInput = value;
          console.log("userCondimentInput", userCondimentInput);
          var prop;
            for (prop in condimentPrices) {
                if(userCondimentInput.toLowerCase() === prop.toLowerCase()) {
                  finalCondimentPrice += condimentPrices[prop]
                  CondimentChoice = prop;
              }
           }
        }
  return SandwichMaker;
})(SandwichMaker || {});



