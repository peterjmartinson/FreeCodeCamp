console.log("From the App!");

$(document).ready(function() {

  'use strict';

  var challengeURL = "/Algorithms/01_reversestring.js";

  $.get( challengeURL, function (response) {
    var fileText = response;
    var oneChar = fileText.substring(0,2);
    console.log("oneChar = " + oneChar);

    $("#file-text").html( htmlCarriageReturned(fileText) );
    // PROBLEM: carriage returns not honored
    // SOLUTION: replace <cr> with <br />




  });

  $.getScript( challengeURL, function(response) {
    // response.reverseString("hello");
    console.log("inside getScript");
    console.log("------- response -----------");
    console.log(response);
    console.log("----- end response ---------");
  });

  var htmlCarriageReturned = function( txt ) {
    return txt.replace(/\n/g,'fffff').replace(/\s/g,'&nbsp;').replace(/fffff/g,'<br>');
    }



});
