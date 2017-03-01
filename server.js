/*
 * server.js 
*/

(function () {
    
    'use strict';
    
    // SET UP =================================================================
    var express  = require('express'),
        app      = express(),
        morgan   = require('morgan'),
        port     = process.env.PORT || 3000,            // set listener port
        fs       = require('fs'),
        algo     = require('./public/Algorithms/01_test.js');
        algo.reverseString('peter');
        algo.reverseString('algorithms');
        algo.reverseString('shakespeare');
        algo.reverseString('express');


    // CONFIGURATION ==========================================================

    app.use(express.static(__dirname + '/public'));// set static files location
    app.use(morgan('dev'));                        // log requests to console


    // START APP ==============================================================
    
    var fileOutput = fs.readFile( __dirname + '/public/Algorithms/01_reversestring.js', 'utf8',
            function(err, data) {
              console.log("fileOutput: \n" + fileOutput);
    });

    var fileOutputSync = fs.readFileSync( __dirname + '/public/Algorithms/01_reversestring.js', 'utf8');
    console.log("fileOutputSync: \n" + fileOutputSync);

    app.listen(port, function () {
        console.log('Server listening on port ' + port);
    });
    
})();

