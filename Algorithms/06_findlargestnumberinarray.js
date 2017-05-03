
function largestOfFour(arr) {
  var largestArray = [];
  for (var whichArray = 0;  whichArray < arr.length; whichArray++) {
    var largestNum = 0;
    for (var i = 0; i < arr[whichArray].length; i++) {
      if ( largestNum < arr[whichArray][i] ) {
        largestNum = arr[whichArray][i];
      }
    }
    largestArray.push(largestNum);
  }
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
