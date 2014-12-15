#explodeTree.js

Takes an array of files and produces a tree representing the directory.

So, this:

```
var files = [
    'debug.js',
    'users/create.js',
    'users/edit.js',
    'users/list/a.js',
    'users/list/b.js'];
```

becomes this:

```
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
```
