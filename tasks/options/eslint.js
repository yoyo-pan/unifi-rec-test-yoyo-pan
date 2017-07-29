'use strict';

var files = [
  './src/scripts/**/*.js',
  './test/**/*.js'
];

var ciGlobals = [
  'module',
  'require',
  'jasmine',
  'describe',
  'beforeAll',
  'afterAll',
  'beforeEach',
  'afterEach',
  'it',
  'expect',
  'inject',
  'angular',
  'protractor',
  'process',
  'sinon',
  'xit',
  'xdescribe',
  'spyOn',
  'browser',
  'by',
  'element'
];

var localGlobals = [
  'module',
  'require',
  'jasmine',
  'describe',
  'fdescribe',
  'beforeAll',
  'afterAll',
  'beforeEach',
  'afterEach',
  'it',
  'fit',
  'expect',
  'inject',
  'angular',
  'protractor',
  'process',
  'sinon',
  'xit',
  'xdescribe',
  'spyOn',
  'browser',
  'by',
  'element'
];

var localRules = {
  'camelcase': ['error', {properties: 'never'}],
  'consistent-return': ['error'],
  'quotes': [2, 'single'],
  'global-strict': ['error', 'never'],
  'key-spacing': ['error', {align: 'value'}],
  'no-alert': [2, 'error'],
  'no-console': [2, 'error'],
  'no-underscore-dangle': ['error', {'allow': []}],
  'no-multi-spaces': ['error', {exceptions: {'VariableDeclarator': true}}],
  'no-return-assign': ['error'],
  'no-shadow': ['error', {'allow': ['deps']}],
  'no-unused-expressions': ['error', {'allowTernary': true}],
  'no-use-before-define': ['error', {'functions': false}]
};

var ciRules = {};
Object.keys(localRules).forEach(function(key) {
  ciRules[key] = localRules[key];
});
localRules['no-alert'] = [1, 'error'];
localRules['no-console'] = [1, 'error'];

module.exports = {
  options: {
    envs: ['browser'],
    globals: localGlobals,
    rules: localRules
  },
  changed_files: {
    files: {
      src: '<%= changedFiles %>'
    }
  },
  local: {
    files: {
      src: files
    }
  },
  ci: {
    files: {
      src: files
    },
    options: {
      globals: ciGlobals,
      rules: ciRules
    }
  }
};
