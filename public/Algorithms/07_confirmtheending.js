
function confirmEnding(str, target) {
  var lastChar = str.substring(str.length-target.length,str.length);
  
  
  return (lastChar == target);
}

confirmEnding("Bastian", "n");
