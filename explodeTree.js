function explodeTree(files, delimiter) {
    var obj = {};
    if (!delimiter) {delimiter = '/';}

    files.map(function (file) {
        var file = file.split('.').shift();
        var paths = file.split(delimiter);
        if (paths.length > 1) {
            var key = paths.shift();
        } else {
            var key = paths[0];
        }

        if ( ! obj[key] ) {
            obj[key] = [];
        }
        obj[key].push(paths.join(delimiter));

    });

    for (var key in obj) {
        var val = obj[key];
        // do we need to process any of these
        var process = false;
        val.map(function(path) {
            path = path.split(delimiter);
            if ( path.length > 1 ) {
                process = true;
            }
        });
        if ( process ) {
            obj[key] = explodeTree(val, delimiter);
        }
    }

    return obj;
};

module.exports = explodeTree;
