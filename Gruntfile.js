module.exports = function (grunt) {
    const sass = require('sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
          options: {
            livereload: true,
            spawn: false,
          },
          css: {
            files: ['scss/*.scss'],
            tasks: ['sass-task'],
          },
          js: {
            files: ['js/*.js'],
            tasks: ['js-task'],
          },
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                'css/pushy.css': 'scss/pushy.scss',
                'css/demo.css': 'scss/demo.scss',
                }
            }
        },
        uglify: {
            dist: {
                files: {
                'js/pushy.min.js': 'js/pushy.js'
                }
            }
        },
    });

    // Load grunt plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('js-task', ['uglify']);
    grunt.registerTask('sass-task', ['sass']);
};  