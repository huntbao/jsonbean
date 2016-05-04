/**
 * @author huntbao
 */

'use strict'

var fs = require('fs')
var path = require('path')
var Mocha = require('mocha')
var mocha = new Mocha().ui('bdd').reporter('spec')

// dump test case
var dumpTestFile = function (dir) {
    fs.readdirSync(dir).forEach(function (name) {
        var file = dir + name
        if (name == 'cases') {
            return
        }
        if (fs.lstatSync(file).isDirectory()) {
            dumpTestFile(file + '/')
        } else if (name.endsWith('test.js')) {
            mocha.addFile(file)
        }
    })
}
// run all test case
dumpTestFile(
    __dirname + ((process.argv[2] || '').trim() || '/')
)
mocha.run(function (failed) {
    process.on('exit', function () {
        process.exit(failed)
    })
})