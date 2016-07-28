var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/articlesdb');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var Article = new Schema({
    title: String,
    body: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

exports.Article = mongoose.model('Article',Article);
