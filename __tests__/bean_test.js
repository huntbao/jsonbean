/**
 * @author huntbao
 */
'use strict'
var fs = require('fs')
var assert = require('assert')
var jsonbean = require('../src/jsonbean.js')

describe('Java bean parse tests', function () {

  it('case 1', function (done) {
    var str = fs.readFileSync('./__tests__/case_1.java', 'utf8');
    var result = jsonbean.parse(str)

    assert.equal('User', result.name)
    assert.equal('User bean', result.description)
    assert.equal(4, result.attributes.length)

    result.attributes.forEach((attribute) => {
      if (attribute.name === 'id') {
        assert.equal('String', attribute.type)
        assert.equal(false, attribute.isArray)
        assert.equal('', attribute.defaultValue)
        assert.equal('user id', attribute.description)
      } else if (attribute.name === 'name') {
        assert.equal('String', attribute.type)
        assert.equal(false, attribute.isArray)
        assert.equal('', attribute.defaultValue)
        assert.equal('user name', attribute.description)
      } else if (attribute.name === 'age') {
        assert.equal('Integer', attribute.type)
        assert.equal(false, attribute.isArray)
        assert.equal('10', attribute.defaultValue)
        assert.equal('user age', attribute.description)
      } else if (attribute.name === 'privileges') {
        assert.equal('String', attribute.type)
        assert.equal(true, attribute.isArray)
        assert.equal('', attribute.defaultValue)
        assert.equal('user privileges', attribute.description)
      }
    })

    done()
  })


  it('case 2', function (done) {
    var str = fs.readFileSync('./__tests__/case_2.java', 'utf8');
    var result = jsonbean.parse(str)

    assert.equal('User', result.name)
    assert.equal('User bean', result.description)
    assert.equal(4, result.attributes.length)

    result.attributes.forEach((attribute) => {
      if (attribute.name === 'id') {
        assert.equal('String', attribute.type)
        assert.equal(false, attribute.isArray)
        assert.equal('', attribute.defaultValue)
        assert.equal('user id', attribute.description)
      } else if (attribute.name === 'name') {
        assert.equal('String', attribute.type)
        assert.equal(false, attribute.isArray)
        assert.equal('', attribute.defaultValue)
        assert.equal('user name', attribute.description)
      } else if (attribute.name === 'age') {
        assert.equal('Integer', attribute.type)
        assert.equal(false, attribute.isArray)
        assert.equal('10', attribute.defaultValue)
        assert.equal('user age', attribute.description)
      } else if (attribute.name === 'privileges') {
        assert.equal('String', attribute.type)
        assert.equal(true, attribute.isArray)
        assert.equal('', attribute.defaultValue)
        assert.equal('user privileges', attribute.description)
      }
    })

    done()
  })


  it('case 3', function (done) {
    var str = fs.readFileSync('./__tests__/case_3.java', 'utf8');
    var result = jsonbean.parse(str)

    assert.equal('User', result.name)
    assert.equal('User bean', result.description)
    assert.equal(4, result.attributes.length)

    result.attributes.forEach((attribute) => {
      if (attribute.name === 'id') {
        assert.equal('String', attribute.type)
        assert.equal(false, attribute.isArray)
        assert.equal('', attribute.defaultValue)
        assert.equal('user id', attribute.description)
      } else if (attribute.name === 'name') {
        assert.equal('String', attribute.type)
        assert.equal(false, attribute.isArray)
        assert.equal('', attribute.defaultValue)
        assert.equal('user name', attribute.description)
      } else if (attribute.name === 'age') {
        assert.equal('Integer', attribute.type)
        assert.equal(false, attribute.isArray)
        assert.equal('10', attribute.defaultValue)
        assert.equal('user age', attribute.description)
      } else if (attribute.name === 'privileges') {
        assert.equal('String', attribute.type)
        assert.equal(true, attribute.isArray)
        assert.equal('', attribute.defaultValue)
        assert.equal('user privileges', attribute.description)
      }
    })

    done()
  })


  it('case 4', function (done) {
    var str = fs.readFileSync('./__tests__/case_4.java', 'utf8');
    var result = jsonbean.parse(str)

    assert.equal('User', result.name)
    assert.equal('User bean', result.description)
    assert.equal(4, result.attributes.length)

    result.attributes.forEach((attribute) => {
      if (attribute.name === 'id') {
        assert.equal('String', attribute.type)
        assert.equal(false, attribute.isArray)
        assert.equal('', attribute.defaultValue)
        assert.equal('user id', attribute.description)
      } else if (attribute.name === 'name') {
        assert.equal('String', attribute.type)
        assert.equal(false, attribute.isArray)
        assert.equal('', attribute.defaultValue)
        assert.equal('user name', attribute.description)
      } else if (attribute.name === 'age') {
        assert.equal('Integer', attribute.type)
        assert.equal(false, attribute.isArray)
        assert.equal('10', attribute.defaultValue)
        assert.equal('user age', attribute.description)
      } else if (attribute.name === 'privileges') {
        assert.equal('String', attribute.type)
        assert.equal(true, attribute.isArray)
        assert.equal('', attribute.defaultValue)
        assert.equal('user privileges', attribute.description)
      }
    })

    done()
  })
})