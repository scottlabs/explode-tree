var dissectFiles = require('./dissectFiles');
var parseDirs = require('./parseDirs');
function processChildren(files, delimiter) {
    var obj = dissectFiles(files, delimiter);

    obj = parseDirs(obj);

    for ( var i=0;i<obj.length;i++ ) {
        var node = obj[i];
        if ( node.type === 'dir' ) {
            obj[i].children = processChildren(obj[i].children, delimiter);
        }
    }
    return obj;
}

module.exports = processChildren;
