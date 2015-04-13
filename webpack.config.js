var webpack = require('webpack');
var conf = JSON.parse(require('fs').readFileSync('package.json'));
var rewriteUrl = function(replacePath) {
    return function(req, opt) {
        var queryIndex = req.url.indexOf('?');
        var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";
        req.url = req.path.replace(opt.path, replacePath) + query;
        //console.log("rewriting ", req.originalUrl, req.url);
    };
};
module.exports = {
    context: __dirname + '/src',
    entry: {
        index: "./index.js",
        indexreact: "./indexreact.js",
        indexangular: "./indexangular.js"
    }, // { main: ['./index.js', 'lib/react-with-addons']},
    output: {
        // library: conf.name,
        filename: "[name].js", // conf.name + ".js",
        libraryTarget: "amd",
        //library: "[name]",
        path: "/", //__dirname + '/public',
        sourceMapFilename: "[file].map"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        }]
    },
    externals: {
         'external/react': "amd ./lib/react-with-addons",
         'external/angular': "amd angular"
    },
    devServer: {
        contentBase: false, //'./public',
        proxy: [
            {
                path: new RegExp("/api/example/1/(.*)"),
                rewrite: rewriteUrl("/$1"),
                target: "http://127.0.0.1:3000/"
            }
        ],
        content: [
            {
                path: "*",
                target: "public"
            },
            {
                path: new RegExp("/static/(.*)"),
                rewrite: rewriteUrl("/$1"),
                target: "public"
            }
        ],
        stats: {
            colors: true
        }
    },
    plugins: [
        new webpack.OldWatchingPlugin(),
        //new webpack.optimize.AggressiveMergingPlugin()
        //new webpack.optimize.CommonsChunkPlugin({ chunks: ["2"], async: false, minChunks: 2})

        new webpack.optimize.UglifyJsPlugin()
    ],
    debug: true,
    devtool: 'source-map'
};
