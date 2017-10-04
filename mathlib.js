module.exports = function() {
  return {
    add: function(num1, num2) {
      console.log("the sum is:", num1 + num2);
      // add code here
    },
    multiply: function(num1, num2) {
      console.log("the total is:", num1 * num2);
      // add code here
    },
    square: function(num) {
      console.log("the total is:", num * num)
      // add code here
    },
    random: function(num1, num2) {
      console.log("Randon number between", num1, "and ", num2, "is:", Math.floor((Math.random() * num2) + num1));
      // add code here
    }
  }
};
