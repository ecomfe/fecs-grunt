# fecs

> fecs for grunt

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install fecs-grunt --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-fecs');
```

## The "fecs" task

### Overview
In your project's Gruntfile, add a section named `fecs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fecs: {
    options: {
      // Task-specific options go here.
    },
    files: {
      // Src
    },
  },
});
```

### Options

[fecs-options](https://github.com/ecomfe/fecs/wiki/CLI)

### Usage Examples

#### Check

```js
grunt.initConfig({
    fecs: {
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
});
```

#### Format

```js
grunt.initConfig({
    fecs: {
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
    },
});
```

#### Check && Format

```js
grunt.initConfig({
    fecs: {
        check: {
            options: {
                command: 'check'
                // 其他参数
            },
            files: {
                // 可在这里指定check的源文件，支持简易模式
                // src: ['./test/input/index.html']
                // 也支持文件数组格式，详见grunt官网文件配置
                // 然而不需要dest
                // 没有files字段或者没有src字段都是默认全部扫描
                src: [
                    './test/input/*'
                ]
            }
        },
        format: {
            options: {
                command: 'format',
                // 其他属性参考check options
            },
            files: {
                src: [
                    './test/input/*'
                ]
            }
        }
    }
});

```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
