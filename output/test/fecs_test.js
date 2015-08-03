/**
 * @file grunt unittest
 * @author Fental<fengeeker@gmail.com>
 */

// 单元测试文件，先放着=。=||
'use strict';

var grunt = require('grunt');
var fs = require('fs');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/
exports.fecs = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    check: function (test) {
        test.expect(0);
        // var file = [path.join(input, 'js/success.js')];

        // var actual = grunt.file.read('tmp/default_options');
        // var expected = grunt.file.read('test/expected/default_options');
        // test.equal(actual, expected, 'should describe what the default behavior is.');
        test.done();
    },
    format: function (test) {
        // format 的单测比较容易些输出文件与期待文件全相等即可
        var files = fs.readdirSync('test/output/test/input');
        var len = files.length;

        test.expect(len);
        for (var i = 0; i < len; i++) {
            var actual = grunt.file.read('test/output/test/input/' + files[i]);
            var expected = grunt.file.read('test/expected/' + files[i]);
            test.equal(actual, expected, '格式化后的文件应于命令行格式化后的文件一致！');
        }
        test.done();
    },
    formatUseReplace: function (test) {
        var files = fs.readdirSync('test/input2');
        var len = files.length;

        test.expect(len);
        for (var i = 0; i < len; i++) {
            var actual = grunt.file.read('test/input2/' + files[i]);
            var expected = grunt.file.read('test/expected/' + files[i]);
            test.equal(actual, expected, '格式化后的文件应于命令行格式化后的文件一致！');
        }

        test.done();
    }

};
