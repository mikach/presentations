var Q = require('q');
var fs = require('fs');

function readFile(filename) {
    var deffered = Q.defer();
    fs.readFile(filename, function(err, res) {
        err ? deffered.reject(err) : deffered.resolve(res);
    });
    return deffered.promise;
}

function* read() {
    var content = yield readFile('basic.js');
    console.log(content.length);
}

var gen = read();

var promise = gen.next().value;

promise.then(gen.next.bind(gen), gen.throw.bind(gen));