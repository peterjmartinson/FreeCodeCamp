console.log('------------------');
function palindrome(str) {
  var matchOnlyLetters = /[A-Za-z0-9]+/gi;
  var cleanStr = str.match(matchOnlyLetters).join('');
  cleanStr = cleanStr.toLowerCase();
  
  var halfLength = Math.floor(cleanStr.length/2);
  var strArray = cleanStr.split('');
  console.log('the array: '+strArray);
  
  for (var i = 0; i < halfLength; i++) {
    if ( strArray[i] !== strArray[cleanStr.length - i - 1] )
      return false;
  }
  return true;
}


palindrome("eye");
