module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            all: ['src/js/app.js']
        },

//        uglify: {
//            options: {
//                mangle: false
//            },
//            my_target: {
//                files: {
//                    'js/app.min.js': 'js/app.js'
//                }
//            }
//        },
//
//        concat: {
//            dist: {
//                src: ['bower_components/jquery/dist/jquery.min.js', 'js/other.js', 'bower_components/angular/angular.min.js', 'bower_components/angular-animate/angular-animate.min.js', 'js/map.min.js', 'js/create_hike.min.js', 'bower_components/jqueryui/jquery-ui.min.js'],
//                dest: 'js/app.min.js'
//            }
//        },


        compass: {
            dev: {
                options: {
                    sassDir: 'src/sass',
                    cssDir: 'src/css'
                }
            }
        },

        watch: {
            js: {
                files: ['src/js/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['src/css/*.css', 'src/sass/*.scss', '!src/css/min.*'],
                tasks: ['compass'],
                options: {
                    spawn: false
                }
            }
        }


    });

    grunt.registerTask('default', ['compass']);
}