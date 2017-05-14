console.log("sandwich maker js works.");

var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;
  var finalSandwich = [];
  var sandwichConstructor = document.getElementById("sandwich-constructor")

  // Return the public interface that other code can interact with
  return {
        addTopping: function(toppingPrice) {
              totalPrice += toppingPrice;
              console.log(totalPrice);
              sandwichConstructor.innerHTML = totalPrice;
      },
        showToppings: function(toppingChoices) {
            finalSandwich.push(" " + toppingChoices + " ");
            console.log("finalSandwich", finalSandwich);
            sandwichConstructor.innerHTML += finalSandwich;
      }
  };
  return totalPrice;
  return finalSandwich;
  return SandwichMaker;
})(SandwichMaker || {});