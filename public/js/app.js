console.log("From the App!");

$(document).ready(function() {

  'use strict';

  var fileText;

  $.get( "/Algorithms/01_reversestring.js", function (response) {
    var fileText = response;
    var oneChar = fileText.substring(0,2);
    console.log("oneChar = " + oneChar);
    console.log("response\n--------\n" + htmlCarriageReturned(fileText));

    $("#file-text").html( htmlCarriageReturned(fileText) );
    // PROBLEM: carriage returns not honored
    // SOLUTION: replace <cr> with <br />




  });

  var htmlCarriageReturned = function( txt ) {
    return txt.replace(/\n/g,'fffff').replace(/\s/g,'&nbsp;').replace(/fffff/g,'<br>');
    }



});
