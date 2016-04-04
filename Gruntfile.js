module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt); 
  require('time-grunt')(grunt);
  
  var DIR_ROOT_APP = "www/";
  var x_DIR_ROOT_APP = "!www/";
  var DIR_ROOT_BUILD = "build/";
  var DIR_LIB_BUILD = "build/lib/";
  var DIR_APP_MODULES = "www/modules/";  

  var DIR_ROOT_BOWER = "bower_components/";

  var BUILD_STYLE_DIR = DIR_ROOT_BUILD + "styles/";

  var filterCopyLib = ["!jquery/src/**/*"];

  var libsJsFile = [
    DIR_LIB_BUILD + "jquery/dist/jquery.js",
    DIR_LIB_BUILD + "bootstrap/dist/js/bootstrap.js",
    DIR_LIB_BUILD + "angular/angular.js",
    DIR_LIB_BUILD + "angular-ui-router/release/angular-ui-router.js",
    DIR_LIB_BUILD + "angular-resource/angular-resource.js",
    DIR_LIB_BUILD + "lodash/lodash.js",
    DIR_LIB_BUILD + "angular-mocks/angular-mocks.js"

  ];

  var libsCssPath = [
    DIR_LIB_BUILD + "bootstrap/dist/css/bootstrap.css"    
  ];


  grunt.initConfig({

    "clean":{
      "build": ["build/**/*"]
    },

    "bower-install-simple": {
        "install": {
          options: {
            color: true,
            production: true,
            directory: DIR_ROOT_BOWER
          }
        }
    },

    "concat":{
      "libsAppJS":{
          options:{
            banner: ";(function() {",
            separator: "})();\n(function() {",
            footer: "})();"
          },
          nonull: true,
          src: libsJsFile,
          dest: DIR_ROOT_BUILD + "js/lib.js"
      },

      "libsAppCSS":{
        nonull: true,
        src: libsCssPath, 
        dest: BUILD_STYLE_DIR + "lib.css"
      },

      "modulosApp": {
        options: {
          // sourceMap: true,
          // sourceMapStyle: "inline",
          banner: "'use strict';(function() {",
          separator: "})();\n(function() {",
          footer: "})();"
        },
        src: [
                DIR_APP_MODULES + "**/*-module.js",
                DIR_APP_MODULES + "**/*.js",
                DIR_ROOT_APP + "app-module.js",
                
             ],
        dest: "build/js/app.js" 
       
      },
    },

     "copy":{
       "main": {
          nonull: true,
          files: [
            {src: [DIR_ROOT_APP + "index.html"], dest: DIR_ROOT_BUILD + "index.html"},
            {src: [DIR_ROOT_APP + "main.css"], dest: BUILD_STYLE_DIR + "app.css"},            
            {expand: true, cwd: DIR_ROOT_BOWER, 
              src: [
                     "**/*.{css,js}",
                     "!**/{Gruntfile,gulpfile,npm,package}.js",
                     "!**/{_jekyll,docs,grunt,perf,test,tests}/**"
                    ].concat(filterCopyLib), 
              dest: DIR_LIB_BUILD, 
              filter: "isFile"
            }            
          ]
        }
      },

      html2js: {
        options: {
          module: "br.com.michel.templates",
          base: DIR_ROOT_APP,
          expand: true,
          htmlmin: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
          }
        },
        appHtml: {          
          src: [DIR_ROOT_APP + "/**/*.html", x_DIR_ROOT_APP + "index.html"],
          dest: DIR_ROOT_BUILD + "js/templates.js"
        }
      },

      karma: {
          unit: {
              configFile: 'karma.conf.js'
          }
      }



  });

  // A very basic default task.
  grunt.registerTask("default", ["clean:build", "download", "compile"]);
  grunt.registerTask("compile", ["html2js:appHtml","copy:main", "dev:concat"]);
  grunt.registerTask("download", ["bower-install-simple:install"]);
  grunt.registerTask("tests" ["karma:unit"])
  grunt.registerTask("dev:concat", ["concat:libsAppJS", "concat:libsAppCSS", "concat:modulosApp"]);


};