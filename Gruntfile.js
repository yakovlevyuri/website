/*
 * http://yakovlevyuri.com
 * Copyright (c) 2015 Yuri Yakovlev (contact@yakovlevyuri.com)
 */

/* global module:false, require:false */
module.exports = function(grunt) {
  // Display the elapsed execution time of grunt tasks
  require('time-grunt')(grunt);

  // A JIT(Just In Time) plugin loader for Grunt
  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    lessFile: {
      front: 'less/front.less',
      print: 'less/print.less'
    },

    cssFile: {
      front: 'css/front.css',
      print: 'css/print.css'
    },

    compiledJS: {
      all: 'js/min/script-min.js'
    },

    jsFile: {
      jquery: 'node_modules/jquery/dist/jquery.min.js',
      highlightjs: 'node_modules/highlightjs/highlight.pack.js',
      slimscroll: 'node_modules/slimscroll/jquery.slimscroll.min.js',
      instafeedjs: 'node_modules/instafeed.js/instafeed.min.js',
      owlcarousel: 'node_modules/dist/owl.carousel.min.js',
      scriptjs: 'js/script.js'
    },

    banner: '/*\n' +
      ' * <%= pkg.name %>\n' +
      ' * <%= pkg.version %>\n' +
      ' * <%= pkg.description %> <%= pkg.url %>\n' +
      ' * This version was compiled <%= grunt.template.today("yyyy-mm-dd") %>\n' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> (<%= pkg.email %>)\n' +
      ' */\n' +
      '\n',

    uglify: {
      options: {
        banner: '<%= banner %>',
      },

      develop: {
        options: {
          sourceMap: true,
          sourceMapName: 'js/min/sourceMap.map',
        },

        files: {
          '<%= compiledJS.all %>': [
            '<%= jsFile.jquery %>',
            '<%= jsFile.highlightjs %>',
            '<%= jsFile.slimscroll %>',
            '<%= jsFile.instafeedjs %>',
            '<%= jsFile.owlcarousel %>',
            '<%= jsFile.scriptjs %>'
          ]
        }
      },

      production: {
        options: {
          sourceMap: false
        },

        files: {
          '<%= compiledJS.all %>': [
            '<%= jsFile.jquery %>',
            '<%= jsFile.highlightjs %>',
            '<%= jsFile.slimscroll %>',
            '<%= jsFile.instafeedjs %>',
            '<%= jsFile.owlcarousel %>',
            '<%= jsFile.scriptjs %>'
          ]
        }
      }
    },

    // compile LESS files to CSS.
    less: {
      options: {
        banner: '<%= banner %>',
      },

      // compilation for development, uncompressed with source map
      develop: {
        files: {
          '<%= cssFile.front %>': '<%= lessFile.front %>',
        },

        options: {
          sourceMap: true,
          sourceMapFilename: 'css/front.css.map',
          sourceMapURL: 'front.css.map',
          sourceMapBasepath: '',
          sourceMapRootpath: '/',
          compress: false
        }
      },

      // compilation of print.css
      other: {
        files: {
          '<%= cssFile.print %>': '<%= lessFile.print %>'
        },
        options: {
          compress: true
        }
      },

      // compilation for production, compressed
      production: {
        files: {
          '<%= cssFile.front %>': '<%= lessFile.front %>'
        },
        options: {
          compress: true
        },
      },
    },

    // image optimalization
    imagemin: {
      default: {
        files: [
          {
            expand: true,
            cwd: 'images',
            src: ['{,*/}*.{jpg,png,gif}'],
            dest: 'images'
          }
        ]
      }
    },

    // svg optimalization
    svgmin: {
      default: {
        files: [
          {
            expand: true,
            cwd: 'images',
            src: ['{,*/}*.svg'],
            dest: '<%=  resourcePath %>/images'
          }
        ]
      }
    },

    // generates meta icons
    favicons: {
      options: {
        windowsTile: false,
        appleTouchBackgroundColor: '#ffffff'
      },
      icons: {
        src: 'images/meta/source.png',
        dest: 'images/meta/'
      }
    },

    // Run predefined tasks whenever watched file patterns are added, changed or deleted
    watch: {
      options: {
        nospawn: true
      },
      uglify: {
        files: ['bower_components/**/*.js', 'js/*.js'],
        tasks: ['uglify:develop']
      },
      less: {
        files: [
          'less/**/*.less',

          // exclude other files
          '!<%= lessFile.print %>'
        ],
        tasks: ['less:develop']
      },
      lessOther: {
        files: ['<%= lessFile.print %>'],
        tasks: ['less:other']
      }
    }
  });

  grunt.registerTask('build-develop', [
    'uglify:develop',
    'less:develop',
    'less:other'
  ]);

  grunt.registerTask('build', [
    'uglify:production',
    'less:production',
    'less:other'
  ]);

  grunt.registerTask('default', ['watch']);
};
