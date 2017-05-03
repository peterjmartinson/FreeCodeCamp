
function titleCase(str) {
  var strArray = str.split(" ");
  var outStrArray = [];
  var outStr = "";
  var matchStr = /[a-z]/gi;
  
  for (var i = 0; i < strArray.length; i++) {
    var tempWord = strArray[i].split("");
        
    tempWord[0] = tempWord[0].toUpperCase();
    for (var j = 1; j < tempWord.length; j++ ) {
      if (tempWord[j].match(matchStr))
      tempWord[j] = tempWord[j].toLowerCase();
    }
    strArray[i] = tempWord.join("");
  }
  
  return strArray.join(" ");
}

titleCase("I'm a little tea pot");
