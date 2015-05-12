'use strict';

require('../');
var tape = require('tape');
var Promise = require('bluebird');

tape(function (test) {
    test.plan(1);
    var response = fetch('/test/ajax.json').call('json').get('hello').then(function (hello) {
        test.equal(hello, 'world');
    });
});
