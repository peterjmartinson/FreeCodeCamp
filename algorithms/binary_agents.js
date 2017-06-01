var f = {};

f.binaryAgent = function(str) {
  var str_array = str.split(' '),
      out_array = [],
      output = '';
  for (let i = 0; i < str_array.length; i++) {
    output += String.fromCharCode(f.binaryToDecimal(str_array[i]));
  }
  return output;
}

f.binaryToDecimal = function(str) {
  var decimal = 0,
      i = 0;
  for (i = 0; i < str.length; i++) {
    decimal += str[i]*Math.pow(2, 7-i);
  }
  return decimal;
}

module.exports = f;
