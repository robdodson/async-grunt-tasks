'use strict';

var fs = require('fs');

module.exports = function(grunt) {

  grunt.registerMultiTask('readWriteLocal', 'Read a file asynchronously and write its contents out', function() {
    var pathToRead = this.data,
        pathToWrite = this.target;

    // Tell grunt this task is asynchronous.
    var done = this.async();

    // Read in the contents of the target file
    fs.readFile(pathToRead, function (err, data) {
      if (err) throw err;

      // Write the contents of the target file to the new location
      fs.writeFile(pathToWrite, data, function (err) {
        if (err) throw err;
        console.log(pathToWrite + ' saved!');
        // Tell grunt the async task is complete
        done();
      });
    });
  });

};