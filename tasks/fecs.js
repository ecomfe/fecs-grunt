/**
 * @file fecs grunt plugin
 * @author Fental<fengeeker@gmail.com>
 */
'use strict';

module.exports = function (grunt) {
    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    grunt.registerMultiTask('fecs', 'Fecs for Grunt.', function () {
        // Merge task-specific and/or target-specific options with these defaults.

        // 异步标识函数
        var async = this.async();

        var fecs = require('fecs');
        // 在默认参数的基础上修改参数
        var options = this.options(fecs.getOptions());

        // grunt 会自己过滤src字段。
        // 配置项中的 src 字段的 glob pattern grunt会自动处理，若模式找到匹配内容，this.filesSrc 则是相应匹配内容的数组
        // 如果没有找到匹配内容，this.filesSrc 则是空数组
        var file = this.filesSrc;
        if (file.length === 0) {
            grunt.log.error('0 files linted. Please check your src patten.');
            return;
        }
        options._ = options._.concat(file);

        var done = function () {
            /* eslint-disable no-console */
            console.timeEnd(fecs.leadName);
            async(true);
        };

        // 根据commond配置进行操作
        if (options.command === 'check') {
            // 由于只需要src，所以check 支持简洁格式 和文件数组格式
            fecs.check(options, done);
        }
        else {
            fecs.format(options, done);
        }
    });
};

