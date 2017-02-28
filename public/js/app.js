console.log("From the App!");

$(document).ready(function() {

  'use strict';

  // var head = document.getElementsByTagName('head')[0];
  // var script = document.createElement('script');
  // script.type = 'text/javascript';

  var challengeURL = "/Algorithms/01_reversestring.js";

  // Print out the text of the function //
  $.get( challengeURL, function (response) {
    // GRAB THE TITLE FROM THE FILE !!
    var fileText = response;
    var firstLine = fileText.substring(0,fileText.indexOf('\n'));
    var firstLineWords = firstLine.split(' ');
    var title = [];
    var i;
    for (i = firstLineWords.indexOf('TITLE:')+1; i < firstLineWords.length; i++) {
      title.push(firstLineWords[i]);
    }
    title = title.join(' ');
    console.log(title);
    
    $("#code-text").html( htmlCarriageReturned(fileText) );
  });
  
  // script.src = challengeURL;
  // head.appendChild(script);
  // console.log(reverseString("Peter"));





  $.getScript( challengeURL )
    .done(function(fn) {
      var obj = eval(fn);
      // console.log(fn);
      console.log(obj);
    });

  // $.getScript( challengeURL, function(response) {
  //   // response.reverseString("hello");
  //   console.log("inside getScript");
  //   console.log("------- response -----------");
  //   console.log(response);
  //   console.log("----- end response ---------");
  // });

  var htmlCarriageReturned = function( txt ) {
    return txt.replace(/\n/g,'fffff').replace(/\s/g,'&nbsp;').replace(/fffff/g,'<br>');
    }



});
