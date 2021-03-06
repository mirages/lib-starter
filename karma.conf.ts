// Karma configuration
// Generated on Sat Nov 07 2020 21:05:42 GMT+0800 (GMT+08:00)
import type { Config, ConfigOptions } from 'karma'
import type { KarmaTypescriptConfig } from 'karma-typescript'

const karmaTypescriptConfig: KarmaTypescriptConfig = {
  tsconfig: './tsconfig.json',
  compilerOptions: {
    // module: 'umd',
    target: 'es5',
    noEmit: false, // 必须输出 js 文件
    sourceMap: true // 覆盖率测试报告需要
  },
  include: ['test/**/*'],
  reports: {
    html: {
      directory: 'coverage',
      subdirectory: 'html'
    },
    json: {
      directory: 'coverage',
      subdirectory: 'json',
      filename: 'coverage.json'
    },
    lcovonly: {
      directory: 'coverage',
      subdirectory: 'lcovonly',
      filename: 'coverage.txt'
    },
    // 在控制台中输出测试报告概要，===== Coverage summary =====
    'text-summary': ''
  }
}

// need to export a function as commonjs
export = function (config: Config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'karma-typescript'],

    // list of files / patterns to load in the browser
    files: ['test/**/*.test.ts', 'src/**/*.ts'],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.ts': ['karma-typescript'] // karma-typescript 预处理器，将 ts 转换成 js
    },

    karmaTypescriptConfig,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'karma-typescript'],

    // mocha reporter 配置
    mochaReporter: {
      showDiff: true,
      output: 'minimal',
      divider: ''
    },

    // web server port
    port: 9876,

    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: 'html',

        // require specific files after Mocha is initialized
        // require: [require.resolve('bdd-lazy-var/bdd_lazy_var_global')],

        // custom ui, defined in required file above
        ui: 'bdd',
        timeout: 2000
      }
    },

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chai',
      'karma-typescript',
      'karma-chrome-launcher'
    ]
  } as ConfigOptions)
}
