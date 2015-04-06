var webpack = require('webpack');
var conf = JSON.parse(require('fs').readFileSync('package.json'));

module.exports = {
    context: __dirname + '/src',
    entry: './index.js', // { main: ['./index.js', 'lib/react-with-addons']},
    output: {
        library: conf.name,
        libraryTarget: "amd",
        path: __dirname + '/public',
        sourceMapFilename: "[file].map"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        }]
    },
    externals: {
         'lib/react': "amd ./lib/react-with-addons"
    },
    devServer: {
        contentBase: './public',
        proxy: [
            {
                path: /test(.*)/,
                target: "http://127.0.0.1:8282/"
            }
        ],
        stats: {
            colors: true
        }
    },
    plugins: [
        new webpack.OldWatchingPlugin()
        //new webpack.optimize.UglifyJsPlugin()
    ],
    debug: true,
    devtool: 'source-map'
};
