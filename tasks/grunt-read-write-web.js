'use strict';

var http = require('http'),
    fs = require('fs');

module.exports = function(grunt) {

  grunt.registerMultiTask('readWriteWeb', 'Write a website to a static html file', function() {
    var pathToRead = this.data,
        pathToWrite = this.target;

    // Tell grunt this task is asynchronous.
    var done = this.async();

    http.get(pathToRead, function(res) {
      // Pipe the data from the response stream to
      // a static file.
      res.pipe(fs.createWriteStream(pathToWrite));
      // Tell grunt the async task is complete
      res.on('end', function() {
        console.log(pathToWrite + ' saved!');
        done();
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
      // Tell grunt the async task failed
      done(false);
    });

  });

};