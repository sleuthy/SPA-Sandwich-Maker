console.log("Meat.js works");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  // Private variable to store the different meat prices
  var meatPrices = {"chicken": 2.00, "turkey": 2.25, "tofu": 1.50, "no-protein": 0}

  // Augment the original object with another method
  maker.addMeat = function() {
    return meatPrices;
  };

  maker.removeMeat = function() {
  	return
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
