function merge(obj, newObj) {
    return obj.children.concat(newObj.children);
};

function processChildren(files, delimiter) {
    var obj = [];

    files.map(function (file) {
        var file = file.split(delimiter);

        if ( file.length > 1 ) {
            var path = file.shift();

            var node = {
                type: 'dir',
                path: path,
                children: [file.join(delimiter)]
            };
        } else {
            var node = {
                type: 'file',
                path: file.join(delimiter)
            };
        }
        obj.push(node);
    });

    var dirs = {};
    for ( var i=0;i<obj.length;i++ ) {
        var node = obj[i];
        var process = false;
        if ( node.type === 'dir' ) {
            var path = node.path;
            // check if there are other dirs with the same name
            if ( dirs[path] === undefined ) {
                dirs[path] = i;
            } else {
                obj[dirs[path]].children = obj[dirs[path]].children.concat(obj[i].children);
                obj.splice(i,1);
            }

        }
    };

    for ( var i=0;i<obj.length;i++ ) {
        var node = obj[i];
        if ( node.type === 'dir' ) {
            obj[i].children = processChildren(obj[i].children, delimiter);
        }
    }
    return obj;
}
function explodeTree(files, delimiter) {
    var obj = {children: []};
    if (!delimiter) {delimiter = '/';}

    obj.children = processChildren(files, delimiter);

    return obj;
};

module.exports = explodeTree;
