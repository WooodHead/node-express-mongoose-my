var express=require('express');
var router=express.Router();


var questions=require('./crud-routes/questions');
var articles=require('./crud-routes/articles');

router.get('/',function(req,res,next){
  res.send('API home');
});


router.use('/questions',questions);
// router.use('/articles',articles);

module.exports=router;
