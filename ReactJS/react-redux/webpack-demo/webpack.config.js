/**
 * NodeJs code
 * This is meta file used by webpack command for bundling, compiling and applying utilities
 * Webpack configuration is just node module
 * >webpack
 */

//grabbing third party plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    //bundle section
    entry: './index.js',
    output: {
        filename: 'bundle.js',
    },
    //webpack dev server
    devServer: {
        contentBase: './'
    },
    //loader/transformation section
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    //Plugins
    plugins: [
        new UglifyJSPlugin()
    ]
};