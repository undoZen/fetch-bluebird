'use strict';

var http = require('http');
global.fetch = require('node-fetch');
require('../../');
var tape = require('tape');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=UTF-8'});
    res.end('{"hello":"world"}');
});
var address = server.listen().address();

tape(function (test) {
    test.plan(1);
    var response = fetch('http://127.0.0.1:'+address.port+'/test/ajax.json')
        .call('json')
        .get('hello')
        .then(function (hello) {
            test.equal(hello, 'world');
            server.close();
        });
});
