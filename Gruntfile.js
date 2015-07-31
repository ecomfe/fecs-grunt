/**
 * @file plugin test gruntfile
 * @author Fental<fengeeker@gmail.com>
 */

'use strict';

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: [
                './test/output'
            ]
        },
        // Configuration to be run (and then tested).
        fecs: {
            check: {
                options: {
                    // 支持的属性，全部配置属性均使用全称
                    // command, color, ignore, reporter, rule, sore, type
                    command: 'check',
                    rule: true,
                    reporter: 'baidu',

                    // 使用ignore时不得指定files的src，命令行的fecs不支持fecs check [文件模式] --ignore [文件名]
                    // 如果要ignore多个文件，ignore的值为数组
                    ignore: 'test/input/index.html',

                    sort: true,
                    // 支持type: 'html'
                    type: 'html, css, js'

                    // 不支持的属性
                    // debug, stream, silent
                },
                files: {
                    // 可在这里指定check的源文件，支持简易模式
                    // src: ['./test/input/index.html']
                    // 也支持文件数组格式，详见grunt官网文件配置
                    // 然而不需要dest，没有files字段或者没有src字段都是默认全部扫描
                    src: [
                        './test/input/*'
                    ]
                }
            },
            format: {
                options: {
                    command: 'format',
                    // 支持这两个属性
                    output: './test/output'
                    // replace: true

                    // 其他属性参考check options
                },
                files: {
                    src: [
                        './test/input/*'
                    ]
                }
            }
        },
        // Unit tests.
        nodeunit: {
            tests: [
                'test/*_test.js'
            ]
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', [
        'clean',
        'fecs'
    ]);

    // By default, lint and run all tests.
    grunt.registerTask('default', [
        'test'
    ]);
};
