if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var res = [],
          prop;
      for(prop in obj) {
        if(obj.hasOwnProperty(prop)) {
          res.push(prop + ': ' +obj[prop])
        }
      }
      return res;
    }
  };
});
