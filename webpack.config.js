var webpack = require('webpack');
var conf = JSON.parse(require('fs').readFileSync('package.json'));

module.exports = {
    context: __dirname + '/src',
    entry: './index.js',
    output: {
        library: "require", //_" + conf.name,
        libraryTarget: "this",
        path: __dirname + '/public'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        }]
    },
    externals: {
        'react': "React"
    },
    devServer: {
        contentBase: './public',
        proxy: [
            {
                path: /test(.*)/,
                target: "http://127.0.0.1:8282/"
            }
        ]
    },
    plugins: [
        new webpack.OldWatchingPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
