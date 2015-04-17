var webpack = require('webpack');
module.exports = {
    context: __dirname + '/src',
    entry: {
        index: "./index.js",
        "index-react": "./index-react.js",
        "index-angular": "./index-angular.js"
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
         'external/angular': "amd angular",
         'external/react': "amd react",
         'external/ngReact': "amd ngReact",
         'external/react-bootstrap': "amd react-bootstrap"
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
