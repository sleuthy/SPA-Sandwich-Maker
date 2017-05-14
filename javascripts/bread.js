var finalBreadPrice = 0;
var BreadChoice = [];

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(sandwich) {
var breadPrices = {"sourdough": 2.00, "wholewheat": 2.00, "gluten-free": 2.50, "no-bread": 0};

        sandwich.addBread = function(value) {
          var userBreadInput = value;
          console.log("userinput", userBreadInput);
          var prop;
            for (prop in breadPrices) {
                if(userBreadInput.toLowerCase() === prop.toLowerCase()) {
                  finalBreadPrice += breadPrices[prop];
                  BreadChoice = prop;
              }
           }
        };
  return SandwichMaker;
})(SandwichMaker || {});
