var processChildren = require('./lib/processChildren');

function merge(obj, newObj) {
    return obj.children.concat(newObj.children);
};

function explodeTree(files, delimiter) {
    var obj = {children: []};
    if (!delimiter) {delimiter = '/';}

    obj.children = processChildren(files, delimiter);

    return obj;
};

module.exports = explodeTree;
