Webpack --
what is webpack?
>module bundler
>concatenation of different files into one single file --> bundling or packing

What is module?
>module can be anything
>can be js files, img files, css, video, documents(xml, html)
bundle means packed file
bundle.js = .js file + .css + .png + .json(document) + .xml

if we dont bundle
>you have to include files using script,link
>large no. of server requests

How web pack works?
Webpack is just node module
webpack is distributed as "global"/"local"

>npm install webpack -g
>npm install webpack --save

Webpack development
1. write js program
2. link them using es6 modules
3. add script file in index.html
4. start server --> install lite server (npm install lite-server -g)
5. test application


Building:
cmd --> webpack inputfile.js bundlefile.js
bundle.js = {index.js + greeter.js + loader}

Third Party libs:
lodash - utility library (>npm install lodash --save)
bundle.js = {index.js + greeter.js + lodash.js + loader}

Webpack 3 major jobs
1. bundling
2. transformation(es6 to es5 OR sass to css OR css to style) -- using third party
3. plug-ins (minification)

CSS
bundle.js = {index.js + greeter.js + lodash.js + loader + styles.css}
npm install --save-dev style-loader css-loader

Plug-ins:
plugins are utility which might be applied to bundle
before, during , after creations

Minification process
done using uglifyjs-webpack-plugin
>npm install uglifyjs-webpack-plugin --save

Bundle automation: //Keeps on listening
>webpack --watch ((1))
((2)) via npm scripts in package.json

---------
lite-server is third party server but webpack is offering server called webpack-dev-server
>npm install --save-dev webpack-dev-server //Hot reloading will not happen, need to add one more config


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Webpack:
What is webpack?
   Webpack is module bundler.
What is module?
module can be any thing.
module can be js files,img files,css files,video,docments(xml,html)
bundle means packed file
bundle.js = .js file + .css + .png + .json(document)+.xml

bundle.js is distributed to browser.

if i dont bundle ,what will happen.

>you have to include files using script,link....
>when you request a page from browser,browser will start dowloading files from server.

How web pack works?
Webpack is just node module.
webpack is distributed as "global module" / local module

>npm install webpack -g
>npm install webpack --save

How to start webpack development?

1.write js programs
2.link them using es 6 modules
3.add script file in index.html
4.start server - lite-server
  >npm install lite-server -g
5.test the the application

Bundling:
 
 webpack inputfile.js  bundlefile.js

bundle.js = {index.js + greeter.js + loader}

Third party libs :  lodash - is utilty lib
>npm install lodash --save

bundle.js = {index.js + greeter.js +  lodash.js + loader}

Loading CSS:

>npm install --save-dev style-loader css-loader
bundle.js = {index.js + greeter.js +  lodash.js + styles.css + loader}

Plugins:
 Plugins are utility which might be applied to bundle
Before creation,during creation,after creations.

Minification process:
mininfication done through plugin-uglifyjs-webpack-plugin

>npm install uglifyjs-webpack-plugin --save

/**
 * This is meta file,used by webpack command
 * for bundling,compling,applying utilties
 * webpack configuration is just node module
 *  >webpack
 */
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    //bundle section
    entry: './index.js',
    output: {
        filename: 'bundle.js',
    },
    
    //loader/Transformation section
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    //Plugin section
    plugins: [
        new UglifyJSPlugin()
    ]
};

Bundle automation:
>webpack --watch
>Via npm scripts
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --watch"
  },
>>>>>>>>>>>>
lite-server is thrid party server but webpack is offering a server
called "npm install --save-dev webpack-dev-server"

/**
 * This is meta file,used by webpack command
 * for bundling,compling,applying utilties
 * webpack configuration is just node module
 *  >webpack
 */
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    //bundle section
    entry: './index.js',
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './'
    },
    //loader/Transformation section
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    //Plugin section
    plugins: [
        new UglifyJSPlugin()
    ]
};

package.json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --watch",
    "start": "webpack-dev-server --open"
  },