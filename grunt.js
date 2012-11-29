'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    
    clean: {
      output: 'output'
    },

    mkdirs: {
      output: 'output'
    },

    readWriteLocal: {
      'output/write-this.txt': 'read-this.txt'
    },

    readWriteWeb: {
      'output/static-page.html': 'http://robdodson.me',
      'output/static-page2.html': 'http://example.com'
    }

  });

  // Load in any and all tasks in the `tasks` folder
  grunt.loadTasks('tasks');

  // Load any tasks in node_modules
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', 'clean mkdirs readWriteLocal readWriteWeb');
};

