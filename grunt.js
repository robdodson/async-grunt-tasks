'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    
    clean: {
      dist: ['write-this.txt', 'static-page.html']
    },

    readWriteLocal: {
      'write-this.txt': 'read-this.txt'
    },

    readWriteWeb: {
      'static-page.html': 'http://robdodson.me'
    }

  });

  // Load in any and all tasks in the `tasks` folder
  grunt.loadTasks('tasks');

  // Load any tasks in node_modules
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', 'clean readWriteLocal readWriteWeb');
};

