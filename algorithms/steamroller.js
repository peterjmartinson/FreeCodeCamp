var A = {};

A.steamrollArray = function(arr) {
  'use strict';

  var return_array = [];

  var getElement = function(element) {
    if ( Array.isArray(element) ) {
      for (let e in element) {
        getElement(element[e]);
      }
    } else {
      return_array.push(element);
    }
  }

  arr.forEach(getElement);
      

  return return_array;
}

module.exports = A;
