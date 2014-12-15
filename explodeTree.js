// better type checker
function getType(obj) {
    var type = Object.prototype.toString.call(obj);
    if (type.indexOf('Array') !== -1) {
        return 'array';
    } else if (type.indexOf('String') !== -1) {
        return 'string';
    } else if (type.indexOf('Undefined') !== -1) {
        return 'undefined';
    } else {
        return 'unknown';
    }
}

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

        switch (getType(obj[key])) {
            case 'undefined':
                obj[key] = [paths.join(delimiter)];
            break;
            case 'string':
                obj[key] = [obj[key], paths.join(delimiter)];
            break;
            case 'array':
                obj[key].push(paths.join(delimiter));
            break;
        }
    });

    for (var key in obj) {
        var val = obj[key];
        switch (getType(val)) {
            case 'array':
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
            break;
        }
    }

    return obj;
};

module.exports = explodeTree;
