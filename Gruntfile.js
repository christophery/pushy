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
    },
    copy: {
      scss: {
        files: [{
          cwd: 'css/',
          src: ['pushy.css'],
          dest: 'scss/',
          expand: true,
          rename: function (dest, src) {
            return dest + src.replace(/([^/]*)$/,'_$1').replace('.css', '.scss');
          }
        }]
      }
    }
  });

  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'copy']);

};