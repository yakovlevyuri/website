var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.jsx')
    ],
    resolve: {
        alias: {
            'react': pathToReact,
            'react-dom': pathToReactDom
        },
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
                exclude: /node_modules/,
                loader: 'babel', // The module to load. "babel" is short for "babel-loader"
                query:
                {
                    presets:['es2015','react']
                }
            },
            {
                test: /\.css$/, // Only .css files
                loaders: ['style', 'css'] // Run both loaders
            }
        ],
        noParse: [pathToReact]
    }
};

module.exports = config;