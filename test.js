var explodeTree = require('./explodeTree');
var _ = require('underscore');

(function () {
    var files = [
        'spec/integration/debug.js'
    ];

    var expectedObj = {
        'spec' : {
            'integration' : ['debug']
        }
    };

    var obj = explodeTree(files);
    runTest(obj, expectedObj);
})();

(function () {
    var files = [
        'debug.js',
        'users/create.js',
        'users/edit.js',
        'users/list/a.js',
        'users/list/b.js'];

        var expectedObj = {
            'debug': [ 'debug' ],
            'users': {
                'create': ['create'],
                'edit': ['edit'],
                'list': [
                    'a', 'b'
                ]
            }
        };

        //var obj = explodeTree(files);
        //runTest(obj, expectedObj);
})();

function runTest(obj, expectedObj) {
    if (!_.isEqual(obj, expectedObj)) {
        console.log('FAIL');
        console.log('obj', obj);
        console.log('expected obj', expectedObj);
    } else {
        console.log('PASS');
    }
};
