var express=require('express');
var router=express.Router();

router.get('/',function(req,res){
  res.render('words/index',{title:'123'});
});
module.exports=router;
