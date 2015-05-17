(function (global) {
'use strict';
var Promise = require('bluebird');
if (!global.fetch) {
    require('fetch-polyfill');
}
if (fetch.Promise) {
    if (fetch.Promise === Promise) {
        return;
    }
    fetch.Promise = Promise;
    return;
}
global.fetch = (function (f) {
    return function fetch(url) {
        return Promise.resolve(f.apply(this, arguments));
    };
}(fetch));
[global.Response, global.Request].forEach(function (obj) {
    if (obj && obj.prototype) {
        'arrayBuffer blob formData json text'.split(' ').forEach(function (method) {
            if (obj.prototype[method]) {
                transMethod(obj.prototype, method);
            }
        });
    }
});
function transMethod(obj, method) {
    var origMethod = obj[method];
    obj[method] = function () {
        return Promise.resolve(origMethod.apply(this, arguments));
    };
}
}(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}));
