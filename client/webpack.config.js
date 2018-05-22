var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//all are taken from the dependencies section found within package.json
const VENDOR_LIBS = [
    "axios",
    "babel-preset-stage-1",
    "eslint-plugin-react",
    "i",
    "material-ui",
    "moment",
    "react",
    "react-dom",
    "react-loading",
    "react-redux",
    "react-router",
    "redux",
    "redux-form",
    "redux-thunk",
    "underscore"
];

module.exports = {
    entry: {
        bundle: '../client/index.js', //changes frequently as we write code, splitted from the vendor libs so the browser has to re-cache it every time the user visits the web-site
        vendor: VENDOR_LIBS //not updated that often, can be cached by the browser once and only recached when we add new vendor libs to the project
    },
    output: {
        path: path.join(__dirname, 'client/dist'),
        filename: '[name].[chunkhash].js' //gets the name from the entry.bundle and entry.vendor once they have been built. chunkhash tells the browser if the file has to be downloaded again or not
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            }
        ]
    },
    plugins: [
        //if react, redux and other vendor libraries are used in both bundle.js and vendor.js (entry->bundle, entry->vendor, as defined in entry obj), make sure they only reside in vendor.js, thus avoiding duplication and reducing the size of the bundle.js file
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'] //the manifest tells the browser if the files required for the app (bundle.js and vendor.js) have changed or not, thus triggering a download if the files changed, or nothing if they did not change - this is called cache busting
        }),
        new HtmlWebpackPlugin({
            template: '../client/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
