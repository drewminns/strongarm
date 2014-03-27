var path = require('path');

var stylesheetsDir = 'styles/';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowerInstall: {
      target: {
        // Point to the files that should be updated when
        // you run `grunt bower-install`
        src: [
          'public/*.html',   // .html support...
        ]
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'public/'
        }
      }
    },
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          'javascript/*.js'
        ],
        dest: 'public/scripts/main.min.js'
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          'public/scripts/main.min.js': ['public/scripts/main.min.js']
        }
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'public/css/main.css': stylesheetsDir + 'main.scss'       // 'destination': 'source'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
      },
      no_dest: {
        src: 'public/css/main.css' // globbing is also possible here
      }
    },
    watch: {
      js: {
        files: ['javascript/*.js'],
        tasks: ['concat:js', 'uglify:js'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          livereload: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-bower-install');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Run the server and watch for file changes
  grunt.registerTask('default', ['bowerInstall', 'connect', 'concat', 'uglify', 'sass', 'autoprefixer', 'watch']);
};