(function () {
    'use strict';

    module.exports = function (grunt) {

        require('load-grunt-tasks')(grunt);

        grunt.initConfig({
            //aqui vão as tarefas do Grunt
            jshint: {
                options: {
                    jshintrc: true
                },
                primeiro: [
                    'app/**/*.js'
                ]
            },

            copy: {
                primeiro: {
                    src: [
                        '*.html',
                        'app/**'
                    ],
                    dest: 'build/'
                }
            },

            concat: {
                js: {
                    src: [
                        'build/app/js/primeiro.module.js',
                        'build/app/**/*.js',
                        '!build/app/**/*.controller.js'
                    ],
                    dest: 'build/source.js'
                },
                css: {
                    src: [
                        'build/app/**/*.css'
                    ],
                    dest: 'build/source.css'
                }
            },

            clean: {
                build:{
                    src: 'build'
                }
            },

            ngAnnotate: {
                options: {
                    singleQuotes: true
                },
                build: {
                    expand: true,
                    src:[
                        'build/**/*.js'
                    ]
                }
            },

            uglify:{
                build: {
                    expand: true,
                    src: 'build/**/*.js'
                }
            },

            cssmin:{
                build: {
                    expand: true,
                    src: 'build/**/*.css'
                }
            },

            htmlmin:{
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                build: {
                    expand: true,
                    src: 'build/**/*.html'
                }
            },

            autoprefixer:{
                options: {
                    remove: false
                },
                build: {
                    expand: true,
                    src: 'build/**/*.css'
                }
            }

        });

        grunt.registerTask('build',[
            'clean:build',
            'copy',
            'ngAnnotate',
            'concat',
            'autoprefixer',
            'uglify',
            'cssmin',
            'htmlmin'
        ]);
    };
})();