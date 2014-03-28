var path = require('path');

var stylesheetsDir = 'styles/';

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bowercopy: {
				options: {
						srcPrefix: 'bower_components'
				},
				scripts: {
						options: {
								destPrefix: 'public/scripts/vendor'
						},
						files: {
								'jquery/jquery.min.js': 'jquery/dist/jquery.js',
								'angular/angular.min.js': 'angular/angular.js'
						}
				}
		},
		injector: {
			options: {},
			local_dependencies: {
				files: {
					'public/index.html': ['public/**/*.js', 'public/**/*.css'],
				}
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
					'public/css/styles.css': stylesheetsDir + 'main.scss'       // 'destination': 'source'
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
	grunt.loadNpmTasks('grunt-bowercopy');
	grunt.loadNpmTasks('grunt-injector');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Run the server and watch for file changes
	grunt.registerTask('default', ['bowercopy', 'injector',  'connect', 'concat', 'uglify', 'sass', 'autoprefixer', 'watch']);
};