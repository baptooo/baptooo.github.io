'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            dev: {
                options: {
                    hostname: 'localhost',
                    port: 1990
                }
            }
        },
        sass: {
            dev: {
                options: {
                    sourcemap: true,
                    loadPath: ['src/libs/', 'src/sass/']
                },
                files: {
                    'src/css/portfolio.css': ['src/sass/main.scss']
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scss: {
                files: ['src/sass/**/*.scss'],
                tasks: 'sass:dev'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('server', ['sass', 'connect:dev', 'watch']);
};