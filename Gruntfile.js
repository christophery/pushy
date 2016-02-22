module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true,
      },
      js: {
        files: ['js/pushy.js'],
        tasks: ['default']
      },
    },
    concat: {
        options: {
          stripBanners: false,
          separator: ';'
        },
        dist: {
          src: [
                'js/pushy.js'
                ],
          dest: 'js/pushy.min.js',
        },
    },
    uglify: {
        build: {
          src: 'js/pushy.min.js',
          dest: 'js/pushy.min.js'
        }
    }
  });
  
  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};