var explodeTree = require('./explodeTree');
var _ = require('underscore');

var files = [
    'debug.js',
    'users/create.js',
    'users/edit.js',
    'users/list/a.js',
    'users/list/b.js'];

var expectedObj = {
    'debug': 'debug',
        'users': {
        'create': 'create',
            'edit': 'edit',
            'list': {
            'a': 'a',
                'b': 'b'
        }
    }
};

// Test that the function works, relying on Underscore
var obj = explodeTree(files);
if (!_.isEqual(obj, expectedObj)) {
    console.log('FAIL', obj);
} else {
    console.log('PASS');
}
