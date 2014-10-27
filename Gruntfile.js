'use strict';
module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: true,
          sourcemap: false
        },
        files: {
          'css/style.css': [
            'scss/main.scss'
          ]
        }
      }
    },

    watch: {

      sass: {
        files: [
          'scss/*.scss'
        ],
        tasks: ['sass']
      },
      livereload: {

        options: {

          livereload: true
        },
        files: [
          '*.php',
          '*.html',
          'js/*.js',
          'scss/*.scss'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', [
    'sass'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);
};