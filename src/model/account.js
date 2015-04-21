define(["../vendor/eventemitter2"], function(EventEmitter) {
    var Model = function() {};
    Model.prototype = new EventEmitter();
    Model.prototype.cached = {
        key: null,
        value: null,
        queue: []
    };
    Model.prototype.getAccount = function(accountNumber) {
        var that = this;
        return new Promise(function(resolve, reject) {
            if(that.cached.key === accountNumber) {
                if(that.cached.value !== null) {
                    console.log("returned cached", that.cached.value.account.customer.email);
                    resolve(that.cached.value);
                } else {
                    console.log("added to queue");
                    that.cached.queue.push(resolve);
                }
            } else {
                console.log("requesting");
                that.cached = {key: accountNumber, value: null, queue: [resolve]};

                var req = new XMLHttpRequest();
                req.onload = function() {
                    if(req.status === 204 || req.status === 200) {
                        if(that.cached.key !== accountNumber) {
                            reject();
                        } else {
                            var response = JSON.parse(this.responseText);
                            that.cached.key = accountNumber;
                            that.cached.value = response;
                            console.log("returned fresh", that.cached.value, that.cached.queue.length);
                            that.cached.queue.forEach(function(r) { r(response);});
                            that.cached.queue = [];
                        }
                    } else {
                        reject(req);
                    }
                };
                req.open("get", "/api/example/1/account/" + accountNumber);
                req.send();
            }
        });
    };

    Model.prototype.saveCustomer = function(accountNumber, customer) {
        var that = this;
        return new Promise(function(resolve, reject) {
            var req = new XMLHttpRequest();
            req.onload = function() {
                if(req.status === 204 || req.status === 200) {
                    if(that.cached.key === accountNumber) that.cached.value.account.customer = customer;
                    //that.cache = {key: null, value: null, queue: []};
                    console.log("refreshed cache with customer result", that.cached.value.account.customer.email);
                    resolve(this);
                    that.emit("accountUpdate");

                } else {
                    reject(this);
                }
            };
            req.open("post", "/api/example/1/account/" + accountNumber + "/customer");
            req.setRequestHeader('Content-Type', 'application/json');
            req.send(JSON.stringify(customer));
        });
    };
    return (new Model());
});
