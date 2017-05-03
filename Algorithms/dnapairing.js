
function pairElement(str) {
  var strArray = str.split(''),
      outArray = [];

  // FOR EACH LETTER IN str, PUSH IT AND ITS PAIR
  // INTO A TEMPORARY ARRAY.  THEN, PUSH THAT TEMP
  // ARRAY INTO THE OUTPUT ARRAY
  strArray.forEach(function(element, index) {
    var tempArray = [];
    tempArray.push(element);
    switch (element) {
      case "A":
        tempArray.push('T');
        break;
      case "C":
        tempArray.push('G');
        break;
      case "G":
        tempArray.push('C');
        break;
      case "T":
        tempArray.push('A');
        break;
      default:
        break;
    }
    outArray.push(tempArray);
  });
  
  return outArray;
}

pairElement("GCG");
