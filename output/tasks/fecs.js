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
        var options = this.options(fecs.getOptions([]));

        // 还是得检查一下文件的合理性，虽然fecs不存在的文件会提示检查成功。。。
        // 后期加吧
        // 不支持filter，因为文件是通过fecs使用流来搞定。。。
        // 所以 拼接src就行了。
        // 接受files字段是为了能够check、format指定的文件
        this.files.forEach(function (f) {
            var tmp = [];
            tmp = options._.concat(f.src);
            options._ = tmp;
        });

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
