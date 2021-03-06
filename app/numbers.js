if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var byte = num.toString(2),
          shouldAdd = 8 - byte.length;
      for(var i = shouldAdd; i > 0; i--) {
        byte = 0 + byte;
      };
      return byte;
    },

    multiply: function(a, b) {
      a = adjust(a);
      b = adjust(b);

      var result = (a.adjusted * b.adjusted) / (a.multiplier * b.multiplier);

      return result;

      function adjust(num) {
        var exponent, multiplier;

        if (num < 1) {
          exponent = Math.floor( Math.log(num) * -1 );
          multiplier = Math.pow(10, exponent);

          return { adjusted: num * multiplier, multiplier: multiplier };
        }

        return { adjusted: num, multiplier: 1 };
      }
    }
  };
});
