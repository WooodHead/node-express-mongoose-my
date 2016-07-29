var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var models = require('./model');
var Article = models.Article;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);
app.get('/', function(req, res) {
    res.redirect('/articles');
});

app.get('/articles', function(req, res) {
    Article.find({}, function(err, docs) {
        res.render('articles/index', {
            title: 'List of Articles',
            articles: docs
        });
    });
});



app.get('/articles/new', function(req, res) {
    res.render('articles/new', {
        title: 'New Article'
    });
});

app.post('/articles', function(req, res) {
    // if (req.body.article._id) {

    // } else {

    article = new Article(req.body);
    article.save(function(err) {
        console.log('created');
    });
    res.redirect('/articles');
});

app.get('/article/:id', function(req, res) {
    console.log('_id: ' + req.params.id);
    Article.findOne({
            _id: req.params.id
        },
        function(err, article) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            console.log(JSON.stringify(article));
            res.render('./articles/show', {
                title: article.title,
                article: {
                    title: '123',
                    body: 'adf'
                }
            });

        });
});

////////////////////
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

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


module.exports = app;
