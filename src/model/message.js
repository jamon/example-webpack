define([], function() {
    var Model = function() {};

    Model.prototype.getMessage = function(success) {
        var req = new XMLHttpRequest();
        req.onload = function() {
            var response = JSON.parse(this.responseText);
            success(response);
        };
        req.open("get", "/api/example/1/test");
        req.send();
    };

    return (new Model());
});
