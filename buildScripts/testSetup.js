//This file isnt transpiled so it must use commonJS and ES5

//Register babel to transpile before our tests run
//transpile is basically the error checking
require('babel-register')();

//Disable webpack features that Mocha doesnt understand
require.extensions['.css'] = function() {};
