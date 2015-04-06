// entry point


module.exports = function(parentRequire) {
    var webpackMatch = "wp!";
    return function(module) {
        var asdf = module.map(m => {
            if(m.substr(0, webpackMatch.length) === webpackMatch) {
                var s = m.substr(webpackMatch.length).split("/", 2);
                var pkg = s[0];
                var mod = s[1];
                console.log("loading", pkg, mod);
            } else {
                // external
                console.log("external", module);
            }
            return ;
        });
        //console.log("trying to load", module, asdf);
        // switch(module) {
        //     case "through": return require("through");
        //     case "duplexer": return require("duplexer");
        // }
        return parentRequire(module);
    };
}(typeof __non_webpack_require__ === "function" ? __non_webpack_require__ : function() {
    throw new Error("Module '" + module + "' not found");
});
require(['react'], function(r) {
    console.log(r);
});
