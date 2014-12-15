var explodeTree = require('./explodeTree');
var _ = require('underscore');

var util = require('util');

test1();
test2();
test3();
test4();

function test1() {
    var files = [
        'debug.js'
    ];

    var expectedObj = {
        children: [
            {
                type: 'file',
                path: 'debug.js'
            }
        ]
    };

    var obj = explodeTree(files);
    runTest(obj, expectedObj);
};

function test2() {
    var files = [
        'spec/integration/debug.js'
    ];

    var expectedObj = {
        children: [
            {
                type: 'dir',
                path: 'spec',
                children: [
                    {
                        type: 'dir',
                        path: 'integration',
                        children: [
                            {
                                type: 'file',
                                path: 'debug.js'
                            }
                        ]
                    }
                ]
            }
        ]
    };

    var obj = explodeTree(files);
    runTest(obj, expectedObj);
};

function test3() {
    var files = [
        'users/create.js',
        'users/edit.js'
    ];

        var expectedObj = {
            children: [
                {
                    type: 'dir',
                    path: 'users',
                    children: [
                        {
                            type: 'file',
                            path: 'create.js'
                        },
                        {
                            type: 'file',
                            path: 'edit.js',
                        },
                    ]
                }
            ]
        };

        var obj = explodeTree(files);
        runTest(obj, expectedObj);
};

function test4() {
    var files = [
        'debug.js',
        'users/create.js',
        'users/edit.js',
        'users/list/a.js',
        'users/list/b.js'];

        var expectedObj = {
            children: [
                {
                    type: 'file',
                    path: 'debug.js'
                },
                {
                    type: 'dir',
                    path: 'users',
                    children: [
                        {
                            type: 'file',
                            path: 'create.js'
                        },
                        {
                            type: 'file',
                            path: 'edit.js',
                        },
                        {
                            type: 'dir',
                            path: 'list',
                            children: [
                                {
                                    type: 'file',
                                    path: 'a.js'
                                },
                                {
                                    type: 'file',
                                    path: 'b.js'
                                },
                            ]
                        }
                    ]
                }
            ]
        };

        var obj = explodeTree(files);
        runTest(obj, expectedObj);
};

function runTest(obj, expectedObj) {
    if (!_.isEqual(obj, expectedObj)) {
        console.log('FAIL');
        console.log(util.inspect(obj, {showHidden: false, depth: null}));
        console.log(util.inspect(expectedObj, {showHidden: false, depth: null}));
    } else {
        console.log('PASS');
    }
};
