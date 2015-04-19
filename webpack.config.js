var webpack = require('webpack');
var changeCase = require('change-case');
var packageJson = JSON.parse(require('fs').readFileSync("./package.json"));
var prefix = "chtr" + changeCase.ucFirst(packageJson.name);
var query = "?prefix=" + prefix + "&angular=external%2Fangular&react=external%2Freact&ngReact=external%2FngReact";

module.exports = {
    context: __dirname + '/src',
    entry: {
        index: "./index.js",
        "index-react": "props-loader!./index.json",
        "index-angular": "../directive-loader/index.js" + query + "!./index-angular.json"
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
         'external/angular': "amd angular",
         'external/ngReact': "amd ngReact",
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
