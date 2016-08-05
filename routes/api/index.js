var express=require('express');
var router=express.Router();



router.get('/',function(req,res,next){
  res.send('API home');
});

var questions=require('./crud-routes/questions');

router.use('/questions',questions);

module.exports=router;