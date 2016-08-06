
var mongoose=require('mongoose');
var mongoosePaginate=require('mongoose-paginate');

var WordSchema=new mongoose.Schema({
  word:String,
  pron:String,
  definition:[String]
});

WordSchema.plugin(mongoosePaginate);


module.exports=mongoose.model('words',WordSchema,'words');
