var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var routes = require('./routes/index');
var weather = require("./routes/weather");
var URL = require('url');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Replace this with your API KEY
var apikey = "f7512a266c30fea2";

// Set to true to see log messages
var debug = true;

// Create Client
var client = new weather(apikey, debug);




app.use('/', routes);
app.use('/conditions',weather);


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.post('/conditions', function(req, res){

    var state = req.param('state');
    var city = req.param('city');
    var query = state.concat("/").concat(city);

    console.log('query: ' +  query);
    client.conditions(query, function(err, obj) {
        if (err){
            console.log('errors: ' + err);
            res.end("Error processing query string:" + queryData.query);
        }
        res.end(obj);
    });
});

app.post('/forecast', function(req, res){
    var query = URL.parse(req.url).query;
    client.forecast(query, function(err, obj) {
        res.end(obj);
    });
});

module.exports = app;



