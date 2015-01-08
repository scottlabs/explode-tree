function parseDirs(obj) {
    // dirs is just an object to keep track of whether we've seen a directory
    // name already or not.
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
                // if another directory with the same name exists, we want to take
                // this node's children and concat to that other directory's children.
                // we then want to remove this node.
                obj[dirs[path]].children = obj[dirs[path]].children.concat(obj[i].children);
                obj.splice(i,1);
                i--;
            }
        }
    };
    return obj;
};

module.exports = parseDirs;
