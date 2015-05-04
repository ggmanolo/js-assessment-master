if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

    indexOf : function(arr, item) {
      for(var i=0; i < arr.length; i++) {
        if(arr[i] === item) {
          return i;
        }
      }
      return -1;
    },

    sum : function(arr) {
      var suma = 0;
      for(var i=0; i < arr.length; i++) {
        suma += arr[i];
      }
      return suma;
    },

    remove : function(arr, item) {
      var aux = [];
      for(var i=0; i < arr.length; i++) {
        if(arr[i] !== item) {
          aux.push(arr[i]);
        }
      }
      return aux;
    },

    removeWithoutCopy : function(arr, item) {
      var i,
          len = arr.length;
      for(i=0; i < len; i++) {
        if(arr[i] === item) {
          arr.splice(i, 1);
          i -= 1;
          len -= 1;
        }
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      var aux;
      aux = arr1.concat(arr2);
      return aux;
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0,
          i;
      for (i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          count++;
        }
      }
      return count;
    },

    duplicates : function(arr) {
      var seen = {};
      var dup = [];

      for (var i = 0, len = arr.length; i < len; i++) {
        seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
      }

      for (var item in seen) {
        if (seen.hasOwnProperty(item) && seen[item] > 1) {
          dup.push(item);
        }
      }

      return dup;
    },

    square : function(arr) {
      var i;
      for(i=0; i < arr.length; i++) {
        arr[i] = arr[i]*arr[i];
      }
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var ocur = [];

      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === target) {
          ocur.push(i);
        }
      }

      return ocur;
    }
  };
});
