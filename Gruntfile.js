module.exports = function (grunt) {
  grunt.initConfig({
    
    watch: {
      scripts: {
        files: 'src/**/*.*',
        options: {
          interrupt:true
        }
      },
    },
        
    browserSync: {
      dev: {
        bsFiles: {
          src : [
              'src/**/*.*'
          ]
        },
        options: {
          watchTask: true,
          proxy: 'http://localhost:3000'
        }
      }
    },

    express: {
      dev: {
        options: {
          script: 'src/server/server.js'
        }
      }
    },

    wiredep: {
      task: {
        src: [
          'src/client/*.html'
        ]
      }
    } 
  });

  // load npm tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-wiredep');

  // define default task
  grunt.registerTask('default', ['wiredep', 'express', 'browserSync', 'watch']);
};