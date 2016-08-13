'use strict';

/*
 * Module dependencies.
 */

const users = require('../app/controllers/users');
const articles = require('../app/controllers/articles');
const comments = require('../app/controllers/comments');
const tags = require('../app/controllers/tags');
const auth = require('./middlewares/authorization');
const words = require('../app/controllers/words');
const mongoose = require('mongoose');
const express=require('express');
/**
 * Route middlewares
 */
 var api = require('../routes/api');

const articleAuth = [auth.requiresLogin, auth.article.hasAuthorization];
const commentAuth = [auth.requiresLogin, auth.comment.hasAuthorization];

const fail = {
    failureRedirect: '/login'
};

/**
 * Expose routes
 */

module.exports = function(app, passport) {
    const pauth = passport.authenticate.bind(passport);

    // user routes
    app.get('/login', users.login);
    app.get('/signup', users.signup);
    app.get('/logout', users.logout);
    app.post('/users', users.create);
    app.post('/users/session',
        pauth('local', {
            failureRedirect: '/login',
            failureFlash: 'Invalid email or password.'
        }), users.session);
    app.get('/users/:userId', users.show);

    app.param('userId', users.load);

    // word routes
    app.use('/api',api);

    app.use('/words', words);

    // article routes
    app.param('id', articles.load);
    app.get('/articles', articles.index);
    app.get('/articles/new', auth.requiresLogin, articles.new);
    app.post('/articles', auth.requiresLogin, articles.create);
    app.get('/articles/:id', articles.show);
    app.get('/articles/:id/edit', articleAuth, articles.edit);
    app.put('/articles/:id', articleAuth, articles.update);
    app.delete('/articles/:id', articleAuth, articles.destroy);

    // home route
    app.get('/', articles.index);

    // comment routes
    app.param('commentId', comments.load);
    app.post('/articles/:id/comments', auth.requiresLogin, comments.create);
    app.get('/articles/:id/comments', auth.requiresLogin, comments.create);
    app.delete('/articles/:id/comments/:commentId', commentAuth, comments.destroy);

    // tag routes
    app.get('/tags/:tag', tags.index);

    var Word = mongoose.model('Word');
    app.get('/test', function(req, res) {
        var obj = new Word({
            word: 'cat'
        });
        obj.save();
        Word.find({}).exec(function(err, words) {
            console.log(err);
            console.log(words);
            res.json(words);
        });
    });

    app.use(express.static('public'));

    // app.get('/markdown',function(req,res){
      // res.sendFile(__dirname+'/../public/markdown.html');
    // });
    /**
     * Error handling
     */

    app.use(function(err, req, res, next) {
        // treat as 404
        if (err.message &&
            (~err.message.indexOf('not found') ||
                (~err.message.indexOf('Cast to ObjectId failed')))) {
            return next();
        }

        console.error(err.stack);

        if (err.stack.includes('ValidationError')) {
            res.status(422).render('422', {
                error: err.stack
            });
            return;
        }

        // error page
        res.status(500).render('500', {
            error: err.stack
        });
    });

    // assume 404 since no middleware responded
    app.use(function(req, res) {
        res.status(404).render('404', {
            url: req.originalUrl,
            error: 'Not found'
        });
    });
};
