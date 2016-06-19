var path = require('path')
var assert = require('assert')
var applicationConfigPath = require('./')

assert.ok(path.isAbsolute(applicationConfigPath('test')), 'should return an absolute path')

assert.throws(function () {
  applicationConfigPath()
}, TypeError, 'should throw error when called incorrectly without parameter')

assert.throws(function () {
  applicationConfigPath(1)
}, TypeError, 'should throw error when called incorrectly with wrong type')
