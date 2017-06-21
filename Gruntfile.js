module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass-task'],
      },
      js: {
        files: ['js/pushy.js'],
        tasks: ['js-task'],
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
    sass: {                              
      dist: {                          
        options: {
          style: 'expanded' //output style: nested, compact, compressed, expanded
        },
        files: {                         
          'css/pushy.css': 'scss/pushy.scss', // 'destination': 'source'
          'css/demo.css': 'scss/demo.scss'
        }
      }
    },
    copy: {
      main: {
        files: [{
            expand: true, 
            cwd: 'node_modules/font-awesome/fonts/', 
            src: '**',
            dest: 'fonts/',
            filter: 'isFile'
        }],
      },
    }
  });
  
  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'watch']);
  grunt.registerTask('js-task', ['concat', 'uglify']);
  grunt.registerTask('sass-task', ['sass']);

};