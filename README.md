# Async Grunt Tasks

This is a little tutorial to guide you through the process of writing asynchronous grunt tasks. Checkout the accompanying blog post at [http://robdodson.me/blog/2012/11/29/asynchronous-grunt-tasks/](http://robdodson.me/blog/2012/11/29/asynchronous-grunt-tasks/)

The tasks take advantage of the [grunt.async method](https://github.com/gruntjs/grunt/blob/master/docs/api_task.md#thisasync--grunttaskcurrentasync) to notify the grunt process when it's safe to resume.

## Example

``` tasks/grunt-read-write-local.js
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
```