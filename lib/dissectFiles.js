function dissectFiles(files, delimiter) {
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
    return obj;
};

module.exports = dissectFiles;
