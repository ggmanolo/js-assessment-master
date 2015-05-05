if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      // creates a deferred object
      var defr = $.Deferred();
      // resolve after 2ms
      setTimeout(function() {
        defr.resolve(value);
      }, 2);
      // return the promise
      return defr.promise();
    },

    manipulateRemoteData : function(url) {
      var defr = $.Deferred();

      $.ajax(url).then(function(res) {
        var people = $.map(res.people, function(person) {
          return person.name;
        })
        defr.resolve(people.sort());
      });

      return defr.promise();
    }
  };
});
