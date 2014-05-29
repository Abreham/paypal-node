var request = require('request');

var wundernode = function (apikey, debug, rateCount, rateTime) {
    var that = this;
    var format = ".json";
    console.log('client initialized with key: ' + apikey + ', debuging ...' + (debug == true ? 'enabled' : 'disabled' ));
    var host = 'http://api.wunderground.com/api/' + apikey;

    if (debug){
        console.log('Host: ' + host);
    }

    var get = function (callback, params, path) {
        var url = host + path;
        if (debug) console.log('get: ' + url);
            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    if (debug) console.log('response body: ' + body);
                    callback(error, body);
                }
                else if (error) {
                    console.log('error: ' + err);
                }

            });

    };

    that.conditions = function (query, callback) {
        var path = "/conditions/q/" + query + format;
        get(callback, null, path);
    };

    that.forecast = function (query, callback) {
        var path = "/forecast/q/" + query + format;
        get(callback, null, path);
    };


};

module.exports = wundernode;