"use strict";

var finalVeggiePrice = 0
var VeggieChoice = "";

var SandwichMaker = (function(sandwich) {
var veggiePrices = {"tomato": .75, "lettuce": .75, "bananapeppers": .75, "no-veggie": 0};

        sandwich.addVeggie = function(value) {
          var userVeggieInput = value;
          console.log("userVeggieinput", userVeggieInput);
          var prop;
            for (prop in veggiePrices) {
                if(userVeggieInput.toLowerCase() === prop.toLowerCase()) {
                  finalVeggiePrice += veggiePrices[prop]
                  VeggieChoice = prop;
              }
           }
        }
  return SandwichMaker;
})(SandwichMaker || {});

