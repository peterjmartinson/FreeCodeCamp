// TITLE: Reverse the String

var reverseString = function(str) {
  var strArray = str.split('');
  return strArray.reverse().join('');
  
}

reverseString("hello");
