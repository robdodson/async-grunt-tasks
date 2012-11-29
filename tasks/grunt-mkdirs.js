'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('mkdirs', 'Make directories', function() {
    grunt.file.mkdir(this.data);
  });

};