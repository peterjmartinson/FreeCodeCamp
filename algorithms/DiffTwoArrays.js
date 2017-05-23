// DiffTwoArrays.js
var A = {};

A.diffArray = function(array1, array2) {
    var outputArray = [],
        i;
    // THIS RELIES ON indexOf RETURNING ONLY FIRST INSTANCE OF MATCH
    // PUSH ELEMENTS CORRESPONDING TO INDICES != 1
    for (i = 0; i < array1.length; i++) {
      
      if (array2.indexOf(array1[i]) == -1) { outputArray.push(array1[i]); }
    }

    for (i = 0; i < array2.length; i++) {
    // need to check for duplicates here!!
      if (array1.indexOf(array2[i]) == -1 && outputArray.indexOf(array2[i]) == -1) {
        outputArray.push(array2[i]);
      }
    }
    return outputArray;
}

module.exports = A;
