'use strict';

var request = require('request'),  // https://github.com/mikeal/request
    fs = require('fs');

module.exports = function(grunt) {

  grunt.registerMultiTask('readWriteWeb', 'Write a website to a static html file', function() {
    var pathToRead = this.data,
        pathToWrite = this.target;

    // Tell grunt this task is asynchronous.
    var done = this.async();

    // Use the request lib to grab the entire response body so we don't
    // have to muck about with streams.
    request(pathToRead, function (err, res, body) {
      if (!err && res.statusCode == 200) {
        // You don't have to do a sync write here, I'm just doing
        // it as an example.
        fs.writeFileSync(pathToWrite, body);
        console.log(pathToWrite + ' saved!');
        // Tell grunt the async task is complete
        done();
      } else {
        console.log('error: ', err);
        console.log(res.statusCode);
        // Tell grunt the async task failed
        done(false);
      }
    });

  });

};