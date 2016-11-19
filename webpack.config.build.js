var path = require('path');

module.exports = {
    entry: path.join(__dirname,'lib','easy-typed.js'),
    output: {
        path: __dirname,
        filename: "index.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};