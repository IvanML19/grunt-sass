module.exports = function (grunt) {

	// Configuration
	grunt.initConfig({
		//pass in options to plugins, references to files, etc
		concat: {
			js: {
				src: ['source/js/jquery-3.2.1.min.js', 'source/js/materialize.min.js', 'source/js/main.js'],
				dest: 'build/js/scripts.js'
			},
			css: {
				src: ['source/css/materialize.css', 'source/css/styles.css'], // ['source/css/*.css'] 
				dest: 'build/css/styles.css'
			}
		},

		sass: {
			build: {
				files: [{
					src: 'source/css/sass/main.scss',
					dest: 'source/css/styles.css'
				}]
			}
		},

		cssmin: {
			target: {
				src: ["build/css/styles.css"],
				dest: "build/css/styles.min.css"
			}
		},

		uglify: {
			build: {
				files: [{
					src: 'build/js/scripts.js',
					dest: 'build/js/scripts.js'
				}]
			}
		}

	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-sass');

	//Register tasks
	grunt.registerTask('sass-to-cssmin', ['sass', 'concat:css', 'cssmin']);
	grunt.registerTask('js-to-jsmin', ['concat:js', 'uglify']);

	grunt.registerTask('compile-all', ['sass', 'concat', 'cssmin', 'uglify']);
};




