module.exports = function (grunt) {
    const sass = require('sass');

    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
  
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');  
    grunt.registerTask('default', ['sass', 'uglify']);
};  