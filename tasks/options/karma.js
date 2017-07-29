'use strict';

module.exports = function (grunt, data) {
  function moduleToPath (module) {
    return 'test/unit/' + module + '/**/*.spec.js';
  }

  var files = require('../../test/unit.conf').files.dependencies.concat(
    grunt.option('modules') ? grunt.option('modules').split(',').map(moduleToPath) : require('../../test/unit.conf').files.tests
  );

  var exclude = require('../../test/unit.conf').files.excluded.concat(
    grunt.option('excluded-modules') ? grunt.option('excluded-modules').split(',').map(moduleToPath) : []
  );

  var jadeifyOptions = {doctype: 'html', global: true};

  var config = {
    options: {
      configFile: 'test/karma.conf.js',

      files: files,
      exclude: exclude,

      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: grunt.option('karma-log-level') || 'WARN'
    },
    unit: {
      autoWatch: false,
      singleRun: true
    },
    ci: {
      autoWatch: false,
      singleRun: true,
      browserify: {
        watch: false,
        debug: false,
        transform: [
          ['require-globify'],
          ['jadeify', jadeifyOptions]
        ]
      },
      coverageReporter: {}
    },
    dev: {
      autoWatch: false,
      singleRun: true,
      browserify: {
        watch: true,
        debug: true,
        transform: [
          ['require-globify'],
          ['jadeify', jadeifyOptions]
        ]
      },
      coverageReporter: {},
      reporters: ['progress']
    },
    debug: {
      autoWatch: false,
      singleRun: false,
      browserify: {
        watch: true,
        debug: true,
        transform: [
          ['require-globify'],
          ['jadeify', jadeifyOptions]
        ]
      },
      coverageReporter: {},
      reporters: ['progress']
    }
  };

  return config;
};
