var webpack = require('webpack');
var changeCase = require('change-case');
var packageJson = JSON.parse(require('fs').readFileSync(__dirname + "/package.json"));
var prefix = changeCase.lcFirst(packageJson.name);

module.exports = {
    context: __dirname + '/src',
    entry: {
        "index": "react-loader?react=external%2Freact!./index.json",
        "index-react": "props-loader!./index-react.json",
        "index-angular": "../directive-loader/index.js?prefix=" + prefix + "&react=external%2Freact!./index-angular.json"
    },
    output: {
        filename: "[name].js",
        libraryTarget: "amd",
        path: __dirname + "/dist",
        sourceMapFilename: "[file].map"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        }]
    },
    externals: {
         'external/react': "amd react",
         //'external/angular': "amd angular",
         //'external/ngReact': "amd ngReact",
         'external/react-bootstrap': "amd react-bootstrap",
    },
    plugins: [
        new webpack.OldWatchingPlugin(),
        new webpack.optimize.UglifyJsPlugin()
        //new webpack.optimize.AggressiveMergingPlugin()
        //new webpack.optimize.CommonsChunkPlugin({ chunks: ["2"], async: false, minChunks: 2})
    ],
    debug: true,
    devtool: 'source-map'
};
