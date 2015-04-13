var webpack = require('webpack');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var serveStatic = require('serve-static');
var conf = JSON.parse(require('fs').readFileSync(__dirname + '/package.json'));
var httpProxy = require('http-proxy').createProxyServer();

var rewriteUrl = function(path, replacePath) {
    return function(req, res, next) {
        var queryIndex = req.url.indexOf('?');
        var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";
        req.url = req.path.replace(path, replacePath) + query;
        console.log("rewriting ", req.originalUrl, req.url);
        next();
    };
};

var conf = JSON.parse(require('fs').readFileSync(__dirname + '/package.json'));

module.exports = {
    load: function(app, options) {
        function registerStatic() {
            var regex = [
                options.static,
                conf.name,
                conf.version.substr(0, conf.version.lastIndexOf(".")),
                "(.*)"
            ].join("/");
            var source = new RegExp(regex);
            var target = __dirname + "/public";
            console.log("static", source, "=>", target);
            app.get(source, rewriteUrl(source, "/$1"), serveStatic(target, {'index': ['index.html']}));

//            app.get(source, shared.rewriteUrl(source, "/$1"), shared.express.static(target));
        }
        function registerApi() {
            var proxy = conf.devServer.proxy;
            var source = new RegExp(proxy.source);
            var proxyOptions = {target: proxy.target, ws: true};
            console.log("api", source, "=>", proxy.target);
            app.all(source, rewriteUrl(source, proxy.rewrite), function(req, res, next) {
                httpProxy.web(req, res, proxyOptions, function(err) {
                    console.error("cannot proxy to " + proxyOptions.target + " (" + err.message + ")");
                });
            });

        }
        function registerWebpack() {
            var path = [
                options.static,
                conf.name,
                conf.version.substr(0, conf.version.lastIndexOf(".")),
                "" // add trailing slash
            ].join("/");
            var webpackConf = require(__dirname + "/webpack.config.js");
            console.log("webpack", path);
            var webpackDevConf = {
                noInfo: false,
                quiet: false,
                lazy: false,
                watchDelay: 300,
                publicPath: path,
                stats: { colors: true}
            };
            app.use(WebpackDevMiddleware(webpack(webpackConf), webpackDevConf));


        }

        registerWebpack();
        registerStatic();
        //registerApi();
    }
};
