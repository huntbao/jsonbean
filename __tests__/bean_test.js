/**
 * @author huntbao
 */
'use strict'
var fs = require('fs')
var assert = require('assert')
var jsonbean = require('../src/jsonbean.js')

describe('Java bean parse tests', function () {
  
  [1,2,3,4,5].forEach(function (i) {
    it('case ' + i , function (done) {
      var str = fs.readFileSync(`./__tests__/case_${i}.java`, 'utf8');
      var expect = fs.readFileSync(`./__tests__/case_${i}.json`, 'utf8');
      expect = JSON.parse(expect);
      var result = jsonbean.parse(str);
      assert.deepEqual(result, expect);
      done()
    });
  });
});