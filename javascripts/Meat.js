console.log("Meat.js works");

var finalMeatPrice = 0
var MeatChoice = "";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  // Private variable to store the different meat prices
  var meatPrices = {"chicken": 2.00, "turkey": 2.25, "tofu": 1.50, "no-protein": 0}

  sandwich.addMeat = function(value) {
          var userMeatInput = value;
          console.log("userMeatinput", userMeatInput);
          var prop;
            for (prop in meatPrices) {
                if(userMeatInput.toLowerCase() === prop.toLowerCase()) {
                  finalMeatPrice += meatPrices[prop]
                  MeatChoice = prop;
              }
           }
        }
  return SandwichMaker;
})(SandwichMaker || {});

