console.log("From the App!");

$(document).ready(function() {

  'use strict';

  var fileText;

  $.get( "/Algorithms/01_reversestring.js", function (response) {
    var fileText = response;
    var oneChar = fileText.substring(0,1);
    console.log("oneChar = " + oneChar);
    console.log("response\n--------\n" + fileText);

    $("#file-text").html( fileText );
    // PROBLEM: carriage returns not honored
    // SOLUTION: replace <cr> with <br />




  });

  var htmlCarriageReturned = function( txt ) {
    var matchText = \\\\r\;
    return matchText.replace(txt,"<br>");
  }



});
