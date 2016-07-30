const mongoose = require('mongoose');

const {
    wrap: async
} = require('co');
const {
    respond,
    respondOrRedicrect
} = require('../utils');

const Word = mongoose.model('Word');

exports.load = async(function*(req, res, next, id) {
    try {
        req.word = yield Word.load(id);
        if (!req.word) {
            return next(new Error('Word not found'));
        }
    } catch (err) {
        return next(err);
    }
});

exports.index = async(function*(req, res) {
    const page = (req.query.page > 0 ? req.query.page : 1) - 1;
    const limit = 20;
    const options = {
        limit: limit,
        page: page
    };
    const words = yield Word.list(options);
    const count = yield Word.count();

    respond(res, 'words/index', {
        title: 'Words',
        words: words,
        page: page + 1,
        pages: Math.ceil(count / limit)
    });
});
