define([], function() {
    var Model = function() {};

    Model.prototype.getMessage = function(success) {
        var req = new XMLHttpRequest();
        req.onload = function() {
            var response = JSON.parse(this.responseText);
            setTimeout(function() {
                success(response);
            }, 1000);
        };
        req.open("get", "/api/example/1/test");
        req.send();
    };

    return (new Model());
});
