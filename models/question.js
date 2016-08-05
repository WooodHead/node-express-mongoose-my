
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var QuestionSchema = new mongoose.Schema({
  text:String,
  type:String

});


QuestionSchema.plugin(mongoosePaginate);

module.exports=mongoose.model('words',QuestionSchema,'words');
