const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WordSchema = new Schema({
    word: {
        type: String,
        trim: true
    },
    definition: {
        type: String,
        trim: true
    },
    pron: {
        type: String
    },

    rank: {
        type: String
    },
    oxford3000: {
        type: String
    },
    gre: {
        type: String
    },
    tofel: {
        type: String
    },
    cet4: {
        type: String
    },
    cet6: {
        type: String
    }
});

WordSchema.statics = {
    load: function(id) {
        return this.findOne({
            _id: id
        }).exec();
    },
    list: function(options) {
        const criteria = options.criteria || {};
        const page = options.page || 0;
        const limit = options.limit || 20;


        return this.find({})
            .limit(limit)
            .skip(limit * page)
            .exec();
    }
};

mongoose.model('Word',WordSchema,'words');
