app.factory('calculatorFactory', function() {
  return {
    add: function(x,y) {
        return x + y;
    },
    substract: function(x,y) {
      return x - y;
    },
    divide: function(x,y) {
      return x / y;
    },
    multiply: function(x,y) {
      return x*y;
    }
  };
});
