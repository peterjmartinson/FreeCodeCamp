
function findLongestWord(str) {
  var longest = "a";
  var strArray = str.split(" ");
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i].length > longest.length)
      longest = strArray[i];
  }
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
