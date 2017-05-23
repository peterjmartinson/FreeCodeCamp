/**
 * Drop It
 *
 * Drop the elements of an array (first argument), starting from the front,
 * until the predicate (second argument) returns true.
 * 
 * The second argument, func, is a function you'll use to test the first
 * elements of the array to decide if you should drop it or not.
 * 
 * Return the rest of the array, otherwise return an empty array.
*/

exports.dropElements = function(arr, callback) {

  var return_array = [];
  var flag = 0;
  arr.forEach(function(element) {
    if (!flag && callback(element)) {
      flag = 1;
    }
    if (flag) {
      return_array.push(element);
    }
  });

  return return_array;
}
